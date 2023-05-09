class SeasonalCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  setConfig(config) {
    if (!config.cards) {
      throw new Error("Please define cards inside the seasonal-card.");
    }

    if (!config.season && !config.seasons) {
      throw new Error(
        "Please define the season or seasons property for the seasonal-card."
      );
    }

    this._config = config;
  }

  isWithinSeason() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    if (this._config.season) {
      let seasonStart, seasonEnd;

      switch (this._config.season.toLowerCase()) {
        case "spring":
          seasonStart = [3, 1];
          seasonEnd = [5, 31];
          break;
        case "summer":
          seasonStart = [6, 1];
          seasonEnd = [8, 31];
          break;
        case "fall":
        case "autumn":
          seasonStart = [9, 1];
          seasonEnd = [11, 30];
          break;
        case "winter":
          seasonStart = [12, 1];
          seasonEnd = [2, 28];
          break;
        default:
          throw new Error("Invalid season specified for the seasonal-card.");
      }

      return (
        (currentMonth > seasonStart[0] && currentMonth < seasonEnd[0]) ||
        (currentMonth === seasonStart[0] && currentDay >= seasonStart[1]) ||
        (currentMonth === seasonEnd[0] && currentDay <= seasonEnd[1])
      );
    } else if (this._config.seasons) {
      return this._config.seasons.some((season) => {
        const startDate = new Date(
          currentDate.getFullYear(),
          parseInt(season.start.split("-")[0]) - 1,
          parseInt(season.start.split("-")[1])
        );
        const endDate = new Date(
          currentDate.getFullYear(),
          parseInt(season.end.split("-")[0]) - 1,
          parseInt(season.end.split("-")[1])
        );

        if (endDate < startDate) {
          endDate.setFullYear(endDate.getFullYear() + 1);
        }

        return currentDate >= startDate && currentDate <= endDate;
      });
    }
  }

  scheduleNextVisibilityUpdate() {
    clearInterval(this._visibilityUpdateInterval);
    this._visibilityUpdateInterval = setInterval(() => {
      this.updateVisibility();
    }, 60 * 1000); // Update every minute
  }

  updateVisibility() {
    if (this.isWithinSeason()) {
      if (!this.content) {
        const root = this.shadowRoot;
        const card = document.createElement("ha-card");
        card.header = this._config.title;
        root.appendChild(card);

        this.content = document.createElement("div");
        this.content.className = "seasonal-card";
        card.appendChild(this.content);

        this._config.cards.forEach((cardConfig) => {
          const element = this.createCardElement(cardConfig);
          this.content.appendChild(element);
        });
      }
    } else {
      if (this.content) {
        this.shadowRoot.removeChild(this.shadowRoot.querySelector("ha-card"));
        this.content = null;
      }
    }

    this.scheduleNextVisibilityUpdate();
  }

  set hass(hass) {
    if (!this._hass) {
      this.updateVisibility();
    }

    this._hass = hass;

    if (this.content) {
      this._config.cards.forEach((cardConfig, index) => {
        const element = this.content.children[index];
        element.hass = hass;
      });
    }
  }

  createCardElement(config) {
    const tag = config.type.startsWith("custom:")
      ? config.type.substr(7)
      : `hui-${config.type}-card`;

    const element = document.createElement(tag);

    if (element.setConfig) {
      element.setConfig(config);
    } else if (element.config) {
      element.config = config;
    } else {
      // Handle custom cards that do not have setConfig or config methods
      Object.entries(config).forEach(([key, value]) => {
        element[key] = value;
      });
    }

    element.hass = this.hass;
    return element;
  }

  getCardSize() {
    let totalSize = 0;
    this._config.cards.forEach((cardConfig) => {
      totalSize += this.createCardElement(cardConfig).getCardSize();
    });

    return totalSize;
  }

  connectedCallback() {
    this.updateVisibility();
    this.addEventListener("ll-rebuild", () => {
      this.updateVisibility();
    });
  }

  disconnectedCallback() {
    clearInterval(this._visibilityUpdateInterval);
    this.removeEventListener("ll-rebuild", () => {
      this.updateVisibility();
    });
  }
}

class MushroomTitleCardCompat extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.content = document.createElement("custom:mushroom-title-card");
    this.shadowRoot.appendChild(this.content);
  }

  set config(value) {
    this.content.title = value.title;
    this.content.subtitle = value.subtitle;
    this.content.alignment = value.alignment;
  }

  set hass(value) {
    // Pass the hass object to the original card
    if (this.content.hass) {
      this.content.hass = value;
    }
  }
}

customElements.define("seasonal-card", SeasonalCard);
customElements.define("mushroom-title-card-compat", MushroomTitleCardCompat);

import {
  LitElement,
  html,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

if (typeof LitElement !== "undefined") {
  console.log("LitElement is loaded!");
} else {
  console.log("LitElement is not loaded!");
}

class SeasonalCard extends LitElement {
  constructor() {
    super();
    this.isVisible = false;
    this.card = null;
    this._hass = null;
  }

  render() {
    return html`
      <div
        class="seasonal-card"
        id="card-container"
        ref=${(el) => {
          if (this.isVisible && this.card && !el.children.length) {
            el.appendChild(this.card);
          }
        }}
      ></div>
    `;
  }

  createCardElement() {
    if (!this.card) return;
    const card = document.createElement(this.card.tagName);
    Object.assign(card, this.card);
    return card;
  }

  set hass(hass) {
    this._hass = hass;
    this.updateVisibility();
  }

  setConfig(config) {
    if (!config.card) {
      throw new Error("You need to define a card");
    }
    if (!config.seasons) {
      throw new Error("You need to define at least one season");
    }
    this.config = config;
    this.updateVisibility();
    this.requestUpdate();
  }

  getCardSize() {
    return this.card ? this.card.getCardSize() : 1;
  }

  updateVisibility() {
    console.log("hass state received:", this._hass);

    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    const currentDay = date.getDate();
    console.log("Current date:", currentMonth, currentDay);

    const isInRange = (start, end) => {
      const [startMonth, startDay] = start.split("-").map(Number);
      const [endMonth, endDay] = end.split("-").map(Number);

      if (currentMonth > startMonth && currentMonth < endMonth) {
        return true;
      } else if (currentMonth === startMonth && currentMonth < endMonth) {
        return currentDay >= startDay;
      } else if (currentMonth === endMonth && currentMonth > startMonth) {
        return currentDay <= endDay;
      } else {
        return (
          currentMonth === startMonth &&
          currentDay >= startDay &&
          currentDay <= endDay
        );
      }
    };

    const isVisible = this.config.seasons.some((season) => {
      const visible = isInRange(season.start, season.end);
      console.log("Checking season:", season.start, season.end, visible);
      return visible;
    });
    console.log("Is visible:", isVisible);

    if (isVisible) {
      console.log("Card should be visible");
      if (!this.card) {
        const cardConfig = this.config.card;
        if (!this._hass) {
          console.error("No hass object received");
          return;
        }
        this.createCard(this._hass, cardConfig);
      }
      this.isVisible = true;
      if (this.card) {
        this.card.hass = this._hass;
      }
    } else {
      console.log("Card should not be visible");
      if (this.card) {
        this.card.hass = null;
        this.card = null;
      }
      this.isVisible = false;
    }
    this.requestUpdate();
  }

  updated(changedProperties) {
    if (changedProperties.has("isVisible") && this.isVisible && this.card) {
      const cardContainer = this.renderRoot.getElementById("card-container");
      if (cardContainer && cardContainer.children.length === 0) {
        cardContainer.appendChild(this.card);
      }
    }
  }

  async createCard(hass, cardConfig) {
    console.log("Creating card", cardConfig.type);
    const tag = `custom:${cardConfig.type}`;
    await customElements.whenDefined(tag);
    const card = document.createElement(tag);
    console.log("Card type:", tag);
    if (card.setConfig) {
      card.setConfig(cardConfig);
    } else if (cardConfig) {
      Object.assign(card, cardConfig);
    }
    card.hass = hass;
    this.card = card;
    this.requestUpdate(); // Request an update to re-render the component
  }
}

customElements.define("seasonal-card", SeasonalCard);

console.log("******Seasonal Card v0.0.1******");

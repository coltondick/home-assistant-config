<!-- PROJECT SHIELDS -->
<div align="center">

[![Last Commit](https://img.shields.io/github/last-commit/coltondick/home-assistant-config?style=for-the-badge)](https://github.com/coltondick/home-assistant-config/commits/main) [![GitHub license](https://img.shields.io/github/license/coltondick/home-assistant-config?style=for-the-badge)](https://github.com/coltondick/home-assistant-config/blob/main/LICENSE) [![GitHub stars](https://img.shields.io/github/stars/coltondick/home-assistant-config?style=for-the-badge)](https://github.com/coltondick/home-assistant-config/stargazers) [![Linkedin](https://img.shields.io/badge/LinkedIn-2E3440?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/coltdi)

</div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/coltondick/home-assistant-config">
    <img src="images/logo.gif" alt="Logo">
  </a>

  <h3 align="center">Home Assistant Documentation</h3>

  <p align="center">
    This repo should serve as smart home inspiration.
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#misc-dependencies">Misc Dependencies</a>
    </li>
    <li><a href="#hardware">Hardware</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is the live working configuration of my smart home. <a href="https://hub.docker.com/r/homeassistant/home-assistant">Home Assistant Container</a> running on my NAS. Use cases are a <a href="https://www.amazon.ca/Fire-HD-10-tablet/dp/B08F5Z44BV">Fire HD 10 tablet</a> (<a href="https://www.thingiverse.com/thing:4579780">wall mounted</a>) with <a href="https://www.fully-kiosk.com">Fully Kiosk Browser</a> running in <a href="https://github.com/maykar/kiosk-mode">kiosk mode</a>, <a href="https://github.com/mrvnklm/homeassistant-desktop">homeassistant-desktop</a> on <a href="https://pop.system76.com">Pop!\_OS</a>, and the <a href="https://play.google.com/store/apps/details?id=io.homeassistant.companion.android">Home Assistant</a> app on my phone.

<img src="images/tablet.png" alt="Tablet">

<p align="right">(<a href="#top">back to top</a>)</p>

## Misc Dependencies

- Docker
- Home Assistant
- HomeBridge
- NodeRed
- Logitech Media Server
- MQTT

<p align="right">(<a href="#top">back to top</a>)</p>

## Hardware

| Vendor              | Product                                                                                                                             | Integration                                                                      | Description                                                                                                                                                                                                                                                                             |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AirGradient         | [DIY Air Quality Sensor](https://www.airgradient.com/diy/)                                                                          | [mqtt](https://www.home-assistant.io/integrations/mqtt)                          | Monitors air quality inside my home.                                                                                                                                                                                                                                                    |
| Aqara               | [Button](https://www.aqara.com/us/wireless_mini_switch.html)                                                                        | [zigbee2mqtt](https://github.com/Koenkk/zigbee2mqtt)                             | Cheap button and reliable button.                                                                                                                                                                                                                                                       |
| Aqara               | [Door and Window Sensor](https://www.aqara.com/us/door_and_window_sensor.html)                                                      | [zigbee2mqtt](https://github.com/Koenkk/zigbee2mqtt)                             | Cheap door and window sensor.                                                                                                                                                                                                                                                           |
| Aqara               | [Temperature and Humidity Sensor](https://www.aqara.com/us/temperature_humidity_sensor.html)                                        | [zigbee2mqtt](https://github.com/Koenkk/zigbee2mqtt)                             | Cheap temperature and humidity sensor.                                                                                                                                                                                                                                                  |
| Charging Essentials | [3 Way Dimmer](https://templates.blakadder.com/ce_smart_home_CFW500D-3W.html)                                                       | [tasmota](https://www.home-assistant.io/integrations/tasmota)                    | Costco light switch with 3 way dimmer flashed with Tasmota.                                                                                                                                                                                                                             |
| Charging Essentials | [Power Monitoring Plug](https://templates.blakadder.com/ce_smart_home_LA-WF7.html)                                                  | [tasmota](https://www.home-assistant.io/integrations/tasmota)                    | Costco smart plug with power monitoring flashed with Tasmota.                                                                                                                                                                                                                           |
| Elgato              | [Stream Deck Mk.2](https://www.elgato.com/en/stream-deck-mk2)                                                                       | [streamdeck-homeassistant](https://github.com/cgiesche/streamdeck-homeassistant) | Use this in my office to quickly turn on/off the office lights and to switch moods.                                                                                                                                                                                                     |
| Geeni               | [Prisma Plus LED Strip](https://templates.blakadder.com/geeni_GN-EW005-999S.html)                                                   | [tasmota](https://www.home-assistant.io/integrations/tasmota)                    | Cheap LED light strip that I purchased at a local big box store and flashed with Tasmota.                                                                                                                                                                                               |
| Google              | Home (Discontinued)                                                                                                                 | [squeezebox](https://www.home-assistant.io/integrations/squeezebox)              | Have these scattered around the house to interface with home assistant via voice, and to annouce TTS alerts, and in the master bedroom as a white noise machine.                                                                                                                        |
| IKEA                | [TRÅDFRI Zigbee repeater](https://www.ikea.com/us/en/p/tradfri-signal-repeater-30400407)                                            | [zigbee2mqtt](https://github.com/Koenkk/zigbee2mqtt)                             | Cheap zigbee repeater used to extend my zigbee network.                                                                                                                                                                                                                                 |
| Logitech            | [Harmony Hub Elite](https://www.logitech.com/en-ca/products/harmony/harmony-elite.915-000256.html)                                  | [harmony](https://www.home-assistant.io/integrations/harmony)                    | Used to control my TV/Android TV/Gaming Consoles/Audio Receiver Surround Sound. Controls my Nvidia Shield using keyboard emulation and root. Additionally, controls my lighting using [emulated_hude](https://www.home-assistant.io/integrations/emulated_hue/)                         |
| Neato               | [Botvac D7 Connected](https://www.bestbuy.ca/en-ca/product/neato-robotics-botvac-d7-connected-robot-vacuum-black-open-box/15223198) | [neato](https://www.home-assistant.io/integrations/neato)                        | Good quality robot vacuum that uses laser guided mapping and no go zones.                                                                                                                                                                                                               |
| Philips             | [Hue Bulbs](https://www.philips-hue.com/en-ca/products/smart-light-bulbs)                                                           | [zigbee2mqtt](https://github.com/Koenkk/zigbee2mqtt)                             | All of the bulbs are connected with zigbee2mqtt through the Conbee II.                                                                                                                                                                                                                  |
| Philips             | [Hue Dimmer Switch](https://www.philips-hue.com/en-ca/p/hue-dimmer-switch/046677473372)                                             | [zigbee2mqtt](https://github.com/Koenkk/zigbee2mqtt)                             | Connected through zigbee2mqtt through the Conbee II and configured within [Node-Red](https://hub.docker.com/r/nodered/node-red).                                                                                                                                                        |
| Philips             | [Hue Strip](https://www.philips-hue.com/en-ca/products/smart-light-strips)                                                          | [zigbee2mqtt](https://github.com/Koenkk/zigbee2mqtt)                             | Connected through zigbee2mqtt through the Conbee II.                                                                                                                                                                                                                                    |
| Phoscon             | [ConBee II](https://phoscon.de/en/conbee2)                                                                                          | [zigbee2mqtt](https://github.com/Koenkk/zigbee2mqtt)                             | Zigbee USB gateway using zigbee2mqtt                                                                                                                                                                                                                                                    |
| Raspberry Pi        | [Zero W](https://rpilocator.com/)                                                                                                   | [mqtt](https://www.home-assistant.io/integrations/mqtt)                          | Used to monitor when my dumb dryer is finished drying laundry. Setup using [rpi-appliance-monitor](https://github.com/Shmoopty/rpi-appliance-monitor). Also have a couple of these running [monitor](https://github.com/andrewjfreyer/monitor/) for higher accuracy presence detection. |
| RTL-SDR             | [RTL-SDR](https://www.amazon.ca/RTL-SDR-Blog-RTL2832U-Software-Telescopic/dp/B011HVUEME)                                            | [mqtt](https://www.home-assistant.io/integrations/mqtt)                          | I use this to intercept weather data from my outdoor weather station and display this information in HA. Additionally, use this to monitor when my doorbell is triggered.                                                                                                               |
| Sinope              | [Smart Wi-Fi thermostat](https://www.sinopetech.com/en/product/smart-wi-fi-thermostat-for-electric-heating-3000-w-4000-w)           | [zigbee2mqtt](https://github.com/Koenkk/zigbee2mqtt)                             | Bought these because BC Hydro was offering a mail in rebate. These are nice because they interface with zigbee and don't require a cloud connection.                                                                                                                                    |
| SONOFF              | [L1 Lite Smart Wifi LED Light Strip](https://www.aliexpress.com/item/1005001810064152.html)                                         | [tasmota](https://www.home-assistant.io/integrations/tasmota)                    | Cheap Aliexpress light strip, but really good quality. Mainly purchased due to it's ability to be flashed with Tasmota.                                                                                                                                                                 |
| SONOFF              | [POW R2 15A 3500W Wifi Switch](https://www.aliexpress.com/item/32965681287.html)                                                    | [tasmota](https://www.home-assistant.io/integrations/tasmota)                    | Use this to monitor when my dumb dishwasher has finished.                                                                                                                                                                                                                               |
| SONOFF              | [SNZB-04 Zigbee Door Window Alarm Sensor](https://www.aliexpress.com/item/1005001928750103.html)                                    | [tasmota](https://www.home-assistant.io/integrations/tasmota)                    | Monitors when my gate is opened and annouces when my gate is opened using Amazon Polly TTS over my Google Home speakers and sends a notification via Telegram.                                                                                                                          |
| SONOFF              | [TH16](https://www.aliexpress.com/item/4000296212032.html)                                                                          | [tasmota](https://www.home-assistant.io/integrations/tasmota)                    | Use this to schedule my outdoor lighting. I have patio lights from Costco that with this I was able to convert to smart lighting. Also, purchased due to it's ability to be flashed with Tasmota.                                                                                       |
| Telus               | [Smarthome Security](https://www.telus.com/en/smarthome-security)                                                                   | [homekit](https://www.home-assistant.io/integrations/homekit/)                   | Formerly ADT, this is integrated using [Docker Homebridge](https://github.com/oznu/docker-homebridge) with the [Alarm.com plugin](https://github.com/node-alarm-dot-com/homebridge-node-alarm-dot-com#readme)                                                                           |
| TP-Link             | [Kasa Smart Wi-Fi Plugs](https://www.kasasmart.com/us/products/smart-plugs)                                                         | [tplink](https://www.home-assistant.io/integrations/tplink)                      | Cheap and reliable smart outlets. Allows you to interface with them without using the Kasa Cloud.                                                                                                                                                                                       |

<p align="right">(<a href="#top">back to top</a>)</p>

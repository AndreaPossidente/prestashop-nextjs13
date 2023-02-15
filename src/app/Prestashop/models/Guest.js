import Customer from "./Customer";
import Model from "./Model";

export default class Guest extends Model {
  static ENDPOINT = "guests";

  constructor(guest) {
    super();
    this.id = guest.id;
    this.id_customer = guest.id_customer;
    this.id_operating_system = guest.id_operating_system;
    this.id_web_browser = guest.id_web_browser;
    this.javascript = guest.javascript;
    this.screen_resolution_x = guest.screen_resolution_x;
    this.screen_resolution_y = guest.screen_resolution_y;
    this.screen_color = guest.screen_color;
    this.sun_java = guest.sun_java;
    this.adobe_flash = guest.adobe_flash;
    this.adobe_director = guest.adobe_director;
    this.apple_quicktime = guest.apple_quicktime;
    this.real_player = guest.real_player;
    this.windows_media = guest.windows_media;
    this.accept_language = guest.accept_language;
    this.mobile_theme = guest.mobile_theme;
  }

  async customer() {
    return await Customer.findById(this.id_customer);
  }

  async operatingSystem() {
    return await OperatingSystem.findById(this.id_operating_system);
  }

  async webBrowser() {
    return await WebBrowser.findById(this.id_web_browser);
  }

  //   id_customer	isUnsignedId	❌		Customer ID
  //   id_operating_system	isUnsignedId	❌		Operating system ID
  //   id_web_browser	isUnsignedId	❌		Web browser ID
  //   javascript	isBool	❌
  //   screen_resolution_x	isInt	❌
  //   screen_resolution_y	isInt	❌
  //   screen_color	isInt	❌
  //   sun_java	isBool	❌
  //   adobe_flash	isBool	❌
  //   adobe_director	isBool	❌
  //   apple_quicktime	isBool	❌
  //   real_player	isBool	❌
  //   windows_media	isBool	❌
  //   accept_language	isGenericName	❌	8
  //   mobile_theme	isBool	❌

  // add non static CRUD
}

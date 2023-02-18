import Customer from "./Customer";
import Model from "./Model";

export default class Guest extends Model {
  static ENDPOINT = "guests";

  id: number;
  id_customer: number;
  id_operating_system: number;
  id_web_browser: number;
  javascript: boolean;
  screen_resolution_x: number;
  screen_resolution_y: number;
  screen_color: number;
  sun_java: boolean;
  adobe_flash: boolean;
  adobe_director: boolean;
  apple_quicktime: boolean;
  real_player: boolean;
  windows_media: boolean;
  accept_language: string;
  mobile_theme: boolean;

  constructor(guest: GuestInterface) {
    super();
    this.id = guest.id;
    this.id_customer = guest.id_customer;
    this.id_operating_system = guest.id_operating_system;
    this.id_web_browser = guest.id_web_browser;
    this.javascript = guest.javascript == 1 ? true : false;
    this.screen_resolution_x = guest.screen_resolution_x;
    this.screen_resolution_y = guest.screen_resolution_y;
    this.screen_color = guest.screen_color;
    this.sun_java = guest.sun_java == 1 ? true : false;
    this.adobe_flash = guest.adobe_flash == 1 ? true : false;
    this.adobe_director = guest.adobe_director == 1 ? true : false;
    this.apple_quicktime = guest.apple_quicktime == 1 ? true : false;
    this.real_player = guest.real_player == 1 ? true : false;
    this.windows_media = guest.windows_media == 1 ? true : false;
    this.accept_language = guest.accept_language;
    this.mobile_theme = guest.mobile_theme == 1 ? true : false;
  }

  async customer() {
    return await Customer.findById(this.id_customer);
  }

  // async operatingSystem() {
  //   return await OperatingSystem.findById(this.id_operating_system);
  // }

  // async webBrowser() {
  //   return await WebBrowser.findById(this.id_web_browser);
  // }
}

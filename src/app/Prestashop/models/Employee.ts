import Customer from "./Customer";
import CustomerMessage from "./CustomerMessage";
import Language from "./Language";
import Model from "./Model";
import Order from "./Order";

export default class Employee extends Model {
  static ENDPOINT = "employees";

  id: number;
  id_lang: number;
  last_passwd_gen: Date;
  stats_date_from: Date;
  stats_date_to: Date;
  stats_compare_from: Date;
  stats_compare_to: Date;
  passwd: string;
  lastname: string;
  firstname: string;
  email: string;
  active: boolean;
  id_profile: number;
  bo_color: string | null;
  default_tab: number;
  bo_theme: string;
  bo_css: string;
  bo_width: number;
  bo_menu: number;
  stats_compare_option: number;
  preselect_date_range: number | null;
  id_last_order: number;
  id_last_customer_message: number;
  id_last_customer: number;
  reset_password_token: string | null;
  reset_password_validity: string;
  has_enabled_gravatar: boolean;

  constructor(employee: EmployeeInterface) {
    super();
    this.id = employee.id;
    this.id_lang = employee.id_lang;
    this.id_last_order = employee.id_last_order;
    this.id_last_customer_message = employee.id_last_customer_message;
    this.id_last_customer = employee.id_last_customer;
    this.last_passwd_gen = new Date(employee.last_passwd_gen);
    this.stats_date_from = new Date(employee.stats_date_from);
    this.stats_date_to = new Date(employee.stats_date_to);
    this.stats_compare_from = new Date(employee.stats_compare_from);
    this.stats_compare_to = new Date(employee.stats_compare_to);
    this.passwd = employee.passwd;
    this.lastname = employee.lastname;
    this.firstname = employee.firstname;
    this.email = employee.email;
    this.active = employee.active == 1 ? true : false;
    this.id_profile = employee.id_profile;
    this.bo_color = employee.bo_color;
    this.default_tab = employee.default_tab;
    this.bo_theme = employee.bo_theme;
    this.bo_css = employee.bo_css;
    this.bo_width = employee.bo_width;
    this.bo_menu = employee.bo_menu;
    this.stats_compare_option = employee.stats_compare_option;
    this.preselect_date_range = employee.preselect_date_range;
    this.reset_password_token = employee.reset_password_token;
    this.reset_password_validity = employee.reset_password_validity;
    this.has_enabled_gravatar =
      employee.has_enabled_gravatar == 1 ? true : false;
  }

  async lang() {
    return await Language.findById(this.id_lang);
  }

  async lastOrder() {
    return await Order.findById(this.id_last_order);
  }

  async lastCustomerMessage() {
    return await CustomerMessage.findById(this.id_last_customer_message);
  }

  async lastCustomer() {
    return await Customer.findById(this.id_last_customer);
  }
}

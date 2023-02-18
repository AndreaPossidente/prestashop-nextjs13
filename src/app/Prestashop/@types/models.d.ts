interface AddressInterface {
  id: number;
  id_customer: number;
  id_manufacturer: number;
  id_supplier: number;
  id_warehouse: number;
  id_country: number;
  id_state: number;
  alias: string;
  company: string;
  lastname: string;
  firstname: string;
  vat_number: string;
  address1: string;
  address2: string;
  postcode: string;
  city: string;
  other: string;
  phone: string;
  phone_mobile: string;
  dni: string;
  deleted: number;
  date_add: string;
  date_upd: string;
}

interface AttachmentInterface {
  id: number;
  file: string;
  file_name: string;
  file_size: number;
  mime: string;
  name: string;
  description: string;
  associations: AssociationInterface;
}

interface CarrierInterface {
  id: number;
  deleted: number;
  is_module: number;
  id_tax_rules_group: number;
  id_reference: number;
  name: string;
  active: number;
  is_free: number;
  url: string;
  shipping_handling: number;
  shipping_external: number;
  range_behavior: number;
  shipping_method: number;
  max_width: string;
  max_height: string;
  max_depth: string;
  max_weight: string;
  grade: number;
  external_module_name: string;
  need_range: number;
  position: number;
  delay: string;
}

interface CartRuleInterface {
  id: number;
  id_customer: number;
  date_from: string;
  date_to: string;
  description: number;
  quantity: number;
  priority: number;
  partial_use: number;
  code: number;
  minimum_amount: string;
  minimum_amount_tax: number;
  minimum_amount_currency: number;
  minimum_amount_shipping: number;
  country_restriction: number;
  carrier_restriction: number;
  group_restriction: number;
  cart_rule_restriction: number;
  product_restriction: number;
  shop_restriction: number;
  free_shipping: number;
  reduction_percent: string;
  reduction_amount: string;
  reduction_tax: number;
  reduction_currency: number;
  reduction_product: number;
  reduction_exclude_special: number;
  gift_product: number;
  gift_product_attribute: number;
  highlight: number;
  active: number;
  date_add: string;
  date_upd: string;
  name: string;
}

interface CartInterface {
  id: number;
  id_address_delivery: number;
  id_address_invoice: number;
  id_currency: number;
  id_customer: number;
  id_guest: number;
  id_lang: number;
  id_shop_group: number;
  id_shop: number;
  id_carrier: number;
  recyclable: string | number;
  gift: string | number;
  gift_message: string;
  mobile_theme: string | number;
  delivery_option: string;
  secure_key: string;
  allow_seperated_package: string | number;
  date_add: string;
  date_upd: string;
  associations: AssociationInterface;
}

interface CategoryInterface {
  id: number;
  id_parent: number;
  id_shop_default: number;
  nb_products_recursive: number;
  active: number;
  is_root_category: number;
  position: number;
  date_add: string;
  date_upd: string;
  name: string;
  link_rewrite: string;
  description: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  associations: AssociationInterface;
}

interface CombinationInterface {
  id: number;
  id_product: number;
  location: string;
  ean13: string;
  isbn: string;
  upc: string;
  mpn: string;
  quantity: string;
  reference: string;
  supplier_reference: string;
  wholesale_price: string;
  price: string;
  ecotax: string;
  weight: string;
  unit_price_impact: string;
  minimal_quantity: number;
  low_stock_threshold: number;
  low_stock_alert: number;
  default_on: number;
  available_date: string;
  associations: AssociationInterface;
}

interface ConfigurationInterface {
  id: number;
  id_shop_group: number;
  id_shop: number;
  name: string;
  value: string;
  date_add: string;
  date_upd: string;
}

interface ContactInterface {
  id: number;
  email: string;
  customer_service: number;
  name: string;
  description: string;
}

interface CMSInterface {
  id: number;
  id_cms_category: number;
  position: number;
  indexation: number;
  active: number;
  meta_description: string;
  meta_keywords: string;
  meta_title: string;
  head_seo_title: string;
  link_rewrite: string;
  content: string;
}

interface CountryInterface {
  id: number;
  id_zone: number;
  id_currency: number;
  call_prefix: number;
  iso_code: string;
  active: number;
  contains_states: number;
  need_identification_number: number;
  need_zip_code: number;
  zip_code_format: string;
  display_tax_label: number;
  name: string;
}

interface CurrencyInterface {
  id: number;
  names: string;
  name: string;
  symbol: string;
  iso_code: string;
  numeric_iso_code: string;
  precision: number;
  conversion_rate: string;
  deleted: number;
  active: number;
  unofficial: number;
  modified: number;
  pattern: string;
}

interface CustomerMessageInterface {
  id: number;
  id_employee: number;
  id_customer_thread: number;
  id_address: number;
  message: string;
  file_name: string;
  user_agent: string;
  private: number;
  date_add: string;
  date_upd: string;
  read: number;
}

interface CustomerThreadInterface {
  id: number;
  id_lang: number;
  id_shop: number;
  id_customer: number;
  id_order: number;
  id_product: number;
  id_contact: number;
  email: string;
  token: string;
  status: number;
  date_add: string;
  date_upd: string;
  associations: AssociationInterface;
}

interface CustomerInterface {
  id: number;
  id_default_group: number;
  id_lang: number;
  newsletter_date_add: string;
  ip_registration_newsletter: string;
  last_passwd_gen: string;
  secure_key: string;
  deleted: number;
  passwd: string;
  lastname: string;
  firstname: string;
  email: string;
  id_gender: number;
  birthday: string;
  newsletter: number;
  optin: number;
  website: string;
  company: string;
  siret: string;
  ape: string;
  outstanding_allow_amount: string;
  show_public_prices: number;
  id_risk: number;
  max_payment_days: number;
  active: number;
  note: string;
  is_guest: number;
  id_shop: number;
  id_shop_group: number;
  date_add: string;
  date_upd: string;
  reset_password_token: string;
  reset_password_validity: string;
  associations: AssociationInterface;
}

interface CustomizationInterface {
  id: number;
  id_address_delivery: number;
  id_cart: number;
  id_product: number;
  id_product_attribute: number;
  quantity: number;
  quantity_refunded: number;
  quantity_returned: number;
  in_cart: number;
  associations: AssociationInterface;
}

interface DeliveryInterface {
  id: number;
  id_carrier: number;
  id_range_price: number;
  id_range_weight: number;
  id_zone: number;
  id_shop: number;
  id_shop_group: number;
  price: number;
}

interface EmployeeInterface {
  id: number;
  id_lang: number;
  last_passwd_gen: string;
  stats_date_from: string;
  stats_date_to: string;
  stats_compare_from: string;
  stats_compare_to: string;
  passwd: string;
  lastname: string;
  firstname: string;
  email: string;
  active: number;
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
  has_enabled_gravatar: number;
}

interface GroupInterface {
  id: number;
  reduction: string;
  price_display_method: number;
  show_prices: number;
  date_add: string;
  date_upd: string;
  name: string;
}

interface GuestInterface {
  id: number;
  id_customer: number;
  id_operating_system: number;
  id_web_browser: number;
  javascript: number;
  screen_resolution_x: number;
  screen_resolution_y: number;
  screen_color: number;
  sun_java: number;
  adobe_flash: number;
  adobe_director: number;
  apple_quicktime: number;
  real_player: number;
  windows_media: number;
  accept_language: string;
  mobile_theme: number;
}

interface ImageInterface {
  general?: ImageSchemaType;
  products?: ImageSchemaType;
  categories?: ImageSchemaType;
  manufacturers?: ImageSchemaType;
  suppliers?: ImageSchemaType;
  stores?: ImageSchemaType;
  customizations?: ImageSchemaType;
}

interface ImageTypeInterface {
  id: number;
  name: string;
  width: number;
  height: number;
  categories: number;
  products: number;
  manufacturers: number;
  suppliers: number;
  stores: number;
}

interface LanguageInterface {
  id: number;
  name: string;
  iso_code: string;
  locale: string;
  active: number;
  is_rtl: number;
  date_format_lite: string;
  date_format_full: string;
}

interface ManufacturerInterface {
  id: number;
  active: number;
  link_rewrite: string;
  name: string;
  date_add: string;
  date_upd: string;
  description: string;
  short_description: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  associations: AssociationInterface;
}

interface MessageInterface {
  id: number;
  id_cart: number;
  id_order: number;
  id_customer: number;
  id_employee: number;
  message: string;
  private: number;
  date_add: string;
}

interface ProductInterface {
  id: number;
  id_manufacturer: number;
  id_supplier: number;
  id_category_default: number;
  new: number | null;
  cache_default_attribute: number;
  id_default_image: number;
  id_default_combination: number;
  id_tax_rules_group: number;
  position_in_category: number;
  manufacturer_name: string;
  quantity: number;
  type: string;
  id_shop_default: number;
  reference: string;
  supplier_reference: string;
  location: string;
  width: string;
  height: string;
  depth: string;
  weight: string;
  quantity_discount: number;
  ean13: string;
  isbn: string;
  upc: string;
  mpn: string;
  cache_is_pack: number;
  cache_has_attachments: number;
  is_virtual: number;
  state: number;
  additonal_delivery_times: number;
  delivery_in_stock: string;
  delivery_out_stock: string;
  product_type: string;
  on_sale: number;
  online_only: number;
  ecotax: string;
  minimal_quantity: number;
  low_stock_threshold: null | number;
  low_stock_alert: number;
  price: string;
  wholesale_price: string;
  unity: string;
  unit_price: string;
  unit_price_ratio: string;
  additional_shipping_cost: string;
  customizable: number;
  text_fields: number;
  uploadable_files: number;
  active: number;
  redirect_type: string;
  id_type_redirected: number;
  available_for_order: number;
  available_date: string;
  show_condition: number;
  condition: string;
  show_price: number;
  indexed: number;
  visibility: string;
  advanced_stock_management: number;
  date_add: string;
  date_upd: string;
  pack_stock_type: number;
  meta_description: string;
  meta_keywords: string;
  meta_title: string;
  link_rewrite: string;
  name: string;
  description: string;
  description_short: string;
  available_now: string;
  available_later: string;
  associations: AssociationInterface;
  price_normal: string;
  price_reduced: string;
}

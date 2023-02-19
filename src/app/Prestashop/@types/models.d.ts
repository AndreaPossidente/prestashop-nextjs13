interface AddressSchema {
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

interface AttachmentSchema {
  id: number;
  file: string;
  file_name: string;
  file_size: number;
  mime: string;
  name: string;
  description: string;
  associations: AssociationSchema;
}

interface CarrierSchema {
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

interface CartRuleSchema {
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

interface CartSchema {
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
  associations: AssociationSchema;
}

interface CategorySchema {
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
  associations: AssociationSchema;
}

interface CombinationSchema {
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
  associations: AssociationSchema;
}

interface ConfigurationSchema {
  id: number;
  id_shop_group: number;
  id_shop: number;
  name: string;
  value: string;
  date_add: string;
  date_upd: string;
}

interface ContactSchema {
  id: number;
  email: string;
  customer_service: number;
  name: string;
  description: string;
}

interface CMSSchema {
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

interface CountrySchema {
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

interface CurrencySchema {
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

interface CustomerMessageSchema {
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

interface CustomerThreadSchema {
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
  associations: AssociationSchema;
}

interface CustomerSchema {
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
  associations: AssociationSchema;
}

interface CustomizationSchema {
  id: number;
  id_address_delivery: number;
  id_cart: number;
  id_product: number;
  id_product_attribute: number;
  quantity: number;
  quantity_refunded: number;
  quantity_returned: number;
  in_cart: number;
  associations: AssociationSchema;
}

interface DeliverySchema {
  id: number;
  id_carrier: number;
  id_range_price: number;
  id_range_weight: number;
  id_zone: number;
  id_shop: number;
  id_shop_group: number;
  price: number;
}

interface EmployeeSchema {
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

interface GroupSchema {
  id: number;
  reduction: string;
  price_display_method: number;
  show_prices: number;
  date_add: string;
  date_upd: string;
  name: string;
}

interface GuestSchema {
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

interface ImageSchema {
  general?: ImageSchemaType;
  products?: ImageSchemaType;
  categories?: ImageSchemaType;
  manufacturers?: ImageSchemaType;
  suppliers?: ImageSchemaType;
  stores?: ImageSchemaType;
  customizations?: ImageSchemaType;
}

interface ImageTypeSchema {
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

interface LanguageSchema {
  id: number;
  name: string;
  iso_code: string;
  locale: string;
  active: number;
  is_rtl: number;
  date_format_lite: string;
  date_format_full: string;
}

interface ManufacturerSchema {
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
  associations: AssociationSchema;
}

interface MessageSchema {
  id: number;
  id_cart: number;
  id_order: number;
  id_customer: number;
  id_employee: number;
  message: string;
  private: number;
  date_add: string;
}

interface OrderCarrierSchema {
  id: number;
  id_order: number;
  id_carrier: number;
  id_order_invoice: number;
  weight: string;
  shipping_cost_tax_excl: string;
  shipping_cost_tax_incl: string;
  tracking_number: string;
  date_add: string;
}

interface OrderCartRuleSchema {
  id: number;
  id_order: number;
  id_order_invoice: number;
  name: string;
  value: string;
  value_tax_excl: string;
  free_shipping: number;
  deleted: number;
}

interface OrderDetailSchema {
  id: number;
  id_order: number;
  product_id: number;
  product_attribute_id: number;
  product_quantity_reinjected: number;
  group_reduction: string;
  discount_quantity_applied: number;
  download_hash: string;
  download_deadline: string;
  id_order_invoice: number;
  id_warehouse: number;
  id_shop: number;
  id_customization: number;
  product_name: string;
  product_quantity: number;
  product_quantity_in_stock: number;
  product_quantity_return: number;
  product_quantity_refunded: number;
  product_price: string;
  reduction_percent: string;
  reduction_amount: string;
  reduction_amount_tax_incl: string;
  reduction_amount_tax_excl: string;
  product_quantity_discount: string;
  product_ean13: string;
  product_isbn: string;
  product_upc: string;
  product_mpn: string;
  product_reference: string;
  product_supplier_reference: string;
  product_weight: string;
  tax_computation_method: number;
  id_tax_rules_group: number;
  ecotax: string;
  ecotax_tax_rate: string;
  download_nb: number;
  unit_price_tax_incl: string;
  unit_price_tax_excl: string;
  total_price_tax_incl: string;
  total_price_tax_excl: string;
  total_shipping_price_tax_excl: string;
  total_shipping_price_tax_incl: string;
  purchase_supplier_price: string;
  original_product_price: string;
  original_wholesale_price: string;
  total_refunded_tax_excl: string;
  total_refunded_tax_incl: string;
  associations: AssociationSchema;
}

interface OrderHistorySchema {
  id: number;
  id_employee: number;
  id_order_state: number;
  id_order: number;
  date_add: string;
}

interface OrderInvoiceSchema {
  id: number;
  id_order: number;
  delivery_number: number;
  delivery_date: string;
  total_discount_tax_excl: string;
  total_discount_tax_incl: string;
  total_paid_tax_excl: string;
  total_paid_tax_incl: string;
  total_products: string;
  total_products_wt: string;
  total_shipping_tax_excl: string;
  total_shipping_tax_incl: string;
  shipping_tax_computation_method: string;
  total_wrapping_tax_excl: string;
  total_wrapping_tax_incl: string;
  shop_address: string;
  note: string;
  date_add: string;
}

interface OrderPaymentSchema {
  id: number;
  id_currency: number;
  amount: string;
  payment_method: string;
  conversion_rate: string;
  transaction_id: string;
  card_number: string;
  card_brand: string;
  card_expiration: string;
  card_holder: string;
  date_add: string;
}

interface OrderSlipSchema {}

interface OrderStateSchema {}

interface OrderSchema {
  id: number;
  id_address_delivery: number;
  id_address_invoice: number;
  id_cart: number;
  id_currency: number;
  id_lang: number;
  id_customer: number;
  id_carrier: number;
  id_shop_group: number;
  id_shop: number;
  current_state: number;
  module: string;
  invoice_number: number;
  invoice_date: string;
  delivery_number: number;
  delivery_date: string;
  valid: number;
  date_add: string;
  date_upd: string;
  shipping_number: string;
  note: string;
  secure_key: string;
  payment: string;
  recyclable: number;
  gift: number;
  gift_message: string;
  mobile_theme: number;
  total_discounts: string;
  total_discounts_tax_incl: string;
  total_discounts_tax_excl: string;
  total_paid: string;
  total_paid_tax_incl: string;
  total_paid_tax_exl: string;
  total_paid_real: string;
  total_products: string;
  total_products_wt: string;
  total_shipping: string;
  total_shipping_tax_incl: string;
  total_shipping_tax_excl: string;
  carrier_tax_rate: string;
  total_wrapping: string;
  total_wrapping_tax_incl: string;
  total_wrapping_tax_excl: string;
  round_mode: number;
  round_type: number;
  conversion_rate: string;
  reference: string;
  associations: AssociationSchema;
}

interface PriceRangeSchema {}

interface ProductCustomizationFieldSchema {}

interface ProductFeatureValueSchema {}

interface ProductFeatureSchema {}

interface ProductOptionValueSchema {}

interface ProductOptionSchema {}

interface ProductSupplierSchema {}

interface ProductSchema {
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
  associations: AssociationSchema;
  price_normal: string;
  price_reduced: string;
}

interface SearchSchema {}

interface ShopGroupSchema {}

interface ShopUrlSchema {}

interface ShopSchema {}

interface SpecificPriceRuleSchema {}

interface SpecificPriceSchema {}

interface StateSchema {}

interface StockAvailableSchema {}

interface StockMovementReasonSchema {}

interface StockMovementSchema {}

interface StockSchema {}

interface StoreSchema {}

interface SupplierSchema {}

interface SupplyOrderDetailSchema {}

interface SupplyOrderHistorySchema {}

interface SupplyOrderReceiptSchema {}

interface SupplyOrderStateSchema {}

interface SupplyOrderSchema {}

interface TagSchema {}

interface TaxRuleGroupSchema {}

interface TaxRuleSchema {}

interface TaxSchema {}

interface TranslatedConfigurationSchema {}

interface WarehouseProductLocationSchema {}

interface WarehouseSchema {}

interface WeightRangeSchema {}

interface ZoneSchema {}

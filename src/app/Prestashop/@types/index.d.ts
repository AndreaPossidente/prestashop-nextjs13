type Filter = { [key: string]: string | number };

interface Options {
  exactMatch?: boolean;
  limit?: number;
  offset?: number;
}

interface CartRowSchema {
  id_product: number;
  id_product_attribute: number;
  id_address_delivery: number;
  id_customization: number;
  quantity: number;
}

interface OrderRowSchema {
  id: number;
  product_id: number;
  product_attribute_id: number;
  product_quantity: number;
  product_name: string;
  product_reference: string;
  product_ean13: string;
  product_isbn: string;
  product_upc: string;
  product_price: string;
  id_customization: number;
  unit_price_tax_incl: string;
  unit_price_tax_excl: string;
}

interface CartRow {
  id_product: number;
  id_product_attribute: number;
  id_address_delivery: number;
  id_customization: number;
  quantity: number;
}

interface OrderRow {
  id: number;
  product_id: number;
  product_attribute_id: number;
  product_quantity: number;
  product_name: string;
  product_reference: string;
  product_ean13: string;
  product_isbn: string;
  product_upc: string;
  product_price: string;
  id_customization: number;
  unit_price_tax_incl: number;
  unit_price_tax_excl: number;
}

interface OrderSlipDetailSchema {
  id: number;
  id_order_detail: number;
  product_quantity: number;
  amount_tax_excl: string;
  amount_tax_incl: string;
}

interface OrderSlipDetail {
  id: number;
  id_order_detail: number;
  product_quantity: number;
  amount_tax_excl: number;
  amount_tax_incl: number;
}

interface Association {
  products?: { id: number }[];
  categories?: { id: number }[];
  addresses?: { id: number }[];
  groups?: { id: number }[];
  product_option_values?: { id: number }[];
  images?: { id: number }[];
  customized_data_text_fields?: { id: number }[];
  customized_data_images?: { id: number }[];
  cart_rows?: CartRow[];
  order_rows?: OrderRow[];
  order_slip_details?: OrderSlipDetail[];
  taxes?: { id: number }[];
}

interface AssociationSchema {
  products?: { id: number }[];
  categories?: { id: number }[];
  addresses?: { id: number }[];
  groups?: { id: number }[];
  product_option_values?: { id: number }[];
  images?: { id: number }[];
  customized_data_text_fields?: { id: number }[];
  customized_data_images?: { id: number }[];
  cart_rows?: CartRowSchema[];
  order_rows?: OrderRowSchema[];
  order_slip_details?: OrderSlipDetailSchema[];
  taxes?: { id: number }[];
}

type ImageSchemaType = {
  "": {
    id: number;
  }[];
  errors: {
    code: number;
    message: string;
  }[];
};

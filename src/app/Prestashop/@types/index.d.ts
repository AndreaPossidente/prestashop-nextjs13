type Filter = { [key: string]: string | number };

interface Options {
  exactMatch?: boolean;
  limit?: number;
  offset?: number;
}

interface CartRow {
  id_product: number;
  id_product_attribute: number;
  id_address_delivery: number;
  id_customization: number;
  quantity: number;
}

interface AssociationInterface {
  products?: { id: number }[];
  categories?: { id: number }[];
  addresses?: { id: number }[];
  groups?: { id: number }[];
  product_option_values?: { id: number }[];
  images?: { id: number }[];
  customized_data_text_fields?: { id: number }[];
  customized_data_images?: { id: number }[];
  cart_rows?: CartRow[];
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

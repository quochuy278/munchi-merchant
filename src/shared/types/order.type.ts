import { Url } from "url";

export type CustomerLocation = {
  lat: number;
  lng: number;
};

export type OrderSummary = {
  total?: number;
  discount?: number;
  tax_rate?: number;
  tax?: number;
  tax_after_discount?: number;
  tax_with_discount?: number;
};

// export type TodoId = string;

// export type Todo = {
//   id: TodoId;
//   title: string;
//   completed: boolean;
// };
export type FetchOrderError = {
    message:string
}
export type OrderState = {
  orders: Order[];
  loading: boolean;
  init: boolean;
  error: string | null;
};

export type OrderCustomer = {
  id: number;
  name?: string;
  order_id?: number;
  email?: string;
  address?: string;
  address_notes?: string;
  zipcode?: string;
  cellphone?: string;
  location?: CustomerLocation;
};

export type OrderBusiness = {
  id: number;
  order_id: number;
  name: string;
  logo: Url;
  email: string;
  city_id: number;
  address: string;
  cellphone: string | null;
  phone: string;
  location: CustomerLocation;
  header: Url;
  pickup_time: string;
  delivery_time: string;
};
export type ProductItemOptions = {
  id: number;
  name: string;
  price: number;
  position: string;
  quantity: number;
};
export type ProductItem = {
  id?: number;
  name?: string;
  logo?: Url;
  allow_suboption_quantity?: boolean;
  with_half_option?: false;
  limit_suboptions_by_max?: false;
  options?: ProductItemOptions[];
  quantity: number
};

export type Order = {
  id: number;
  uuid: string;
  status: number;
  summary: OrderSummary;
  customer: OrderCustomer;
  products: ProductItem[];
  business: OrderBusiness;
  comment: string;
  prepTime: string;
  delivery_type:number,
  timeStamp:string
};

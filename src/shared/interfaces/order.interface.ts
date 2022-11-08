import { Url } from "url";

export interface CustomerLocation {
  lat: number;
  lng: number;
}

export interface OrderSummary {
  total?: number;
  discount?: number;
  tax_rate?: number;
  tax?: number;
  tax_after_discount?: number;
  tax_with_discount?: number;
}

// export type TodoId = string;

// export type Todo = {
//   id: TodoId;
//   title: string;
//   completed: boolean;
// };
export interface FetchOrderError {
  message: string;
}
export interface OrderState {
  orders: Order[];
  loading: boolean;
  init: boolean;
  error: string | null;
}

export interface OrderCustomer {
  id: number;
  name: string;
  order_id: number;
  email: string;
  address: string;
  address_notes: string;
  zipcode: string;
  cellphone: string;
  location: CustomerLocation;
}

export interface OrderBusiness {
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
}
export interface ProductItemOptions {
  id: number;
  name: string;
  price: number;
  position: string;
  quantity: number;
}
export interface ProductItem {
  id: number;
  name: string;
  logo?: Url;
  allow_suboption_quantity?: boolean;
  with_half_option?: false;
  limit_suboptions_by_max?: false;
  options?: ProductItemOptions[];
  quantity: number;
}

export interface Order {
  id: number;
  uuid: string;
  status: number;
  summary: OrderSummary;
  customer: OrderCustomer;
  products: ProductItem[];
  business: OrderBusiness;
  comment: string;
  prepTime: number;
  deliveryType: number;
  timeStamp: string;
}

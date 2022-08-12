import { ProductItem } from "./order.type";

export type Props = {
  children?: JSX.Element | JSX.Element[];
  detailOrder?: any;
  timeStamp?: string;
  status?: number;
  name?: string;
  orderType?: number;
  items?: [];
  orderId?: string | number;
  ordersData?: any;
  orderStatus?: number;
  orderTitle?: string;
  orderQuantity?: number;
  delivery_type?: any;
  productList?: ProductItem[];
  orderIndex?: number 
};
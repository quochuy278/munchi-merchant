import { ProductItem } from "./order.type";

export type Props = {
  children?: JSX.Element | JSX.Element[];
  detailOrder?: any;
  timeStamp?: string;
  status?: number;
  name?: string;
  orderType?: number;
  items?: [];
  orderId?: number;
  ordersData?: any;
  orderStatus?: number;
  orderTitle?: string;
  orderQuantity?: number;
  delivery_type?: any;
  productList?: ProductItem[];
  orderIndex?: number 
  prepTime?: string | number
  onOpen?: () => void
};

export type FooterProps = {
  prepTime?: number | string;
  orderId?: number;
  orderStatus?: number;
};
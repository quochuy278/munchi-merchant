import { Order, ProductItem } from "./order.interface";

export type Props = {
  children?: JSX.Element | JSX.Element[];
};

export interface FooterChildProps extends FooterProps {
  onOpen: () => void;
}

export interface FooterProps extends Props {
  prepTime: number | string;
  orderId: number;
  orderStatus: number;
  deliveryType: number;
}

export interface OrderTitleProps extends Props {
  orderTitle: string;
  orderQuantity: number;
}

export interface OrderDataProps extends Props {
  ordersData: Order[];
}

export interface DetailOrderDataProps extends Props {
  detailOrder: Order;
}

export interface OrderProductListProps extends Props {
  productList: ProductItem[];
}

export interface DetailInfoListProps extends Props {
  name: string;
  deliveryType: number;
}

export interface DialogProps extends FooterProps {
  open: boolean;
  onClose: () => void;
}

export interface DetailFooterProps extends Props {
  timeStamp: string;
  orderStatus: number;
  deliveryType: number;
}

export interface DetailTitleProps extends Props {
 orderId: number
}

export interface FactoryProps {
  deliveryType: number
}


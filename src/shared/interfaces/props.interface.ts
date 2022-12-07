import { Order, ProductItem } from "./order.interface";

export type Props = {
  children?: JSX.Element | JSX.Element[];
};


export interface FooterProps extends Props {
  prepTime: number;
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

export interface FactoryIcon {
  orderType: number;
}

export interface OrderProductListProps extends Props {
  productList: ProductItem[];
  orderId: number
}

export interface DetailInfoListProps extends Props {
  name: string;
  deliveryType: number;
}

export interface DialogProps extends FooterProps {
  open: boolean;
  newPrepTime: number;
  onClose: () => void;
}

export interface DetailFooterProps extends Props {
  timeStamp: string;
  orderStatus: number;
  deliveryType: number;
  orderId: number;
}

export interface DetailFooterChildProps extends DetailFooterProps {
  onOpen: () => void;
}

export interface DetailTitleProps extends Props {
  orderId: number;
}

export interface FactoryProps {
  deliveryType: number;
}


export interface ClockProps extends Props {
  targetDate:number
}

export interface CoundownProps extends Props {
  targetDate: number;
}

export interface FactoryTimeFormatProps extends Props {
  minutes: number;
  seconds: number;
  isDanger:boolean
}

export interface FactoryDialogContentProps extends Props {
  open:boolean,
  onClose: () => void,
  orderId:number,
  deliveryType:number,
  orderStatus:number,
  newPrepTime:number
}
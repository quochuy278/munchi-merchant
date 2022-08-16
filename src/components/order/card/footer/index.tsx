import { FooterProps } from "../../../../shared/interfaces/props.interface";
import {
  OrderAcceptedFooter, OrderPendingFooter, OrderReadyFooter
} from "../../../customcomponents/footers/order";

export default function OrderFooter({
  orderStatus,
  orderId,
  prepTime,
  deliveryType,
}: FooterProps) {
  let orderFooter = <></>;
  switch (orderStatus) {
    case 0:
      orderFooter = (
        <OrderPendingFooter
          orderStatus={orderStatus}
          orderId={orderId}
          prepTime={prepTime}
          deliveryType={deliveryType}
        />
      );
      break;
    case 1:
      orderFooter = (
        <OrderAcceptedFooter
          orderStatus={orderStatus}
          orderId={orderId}
          prepTime={prepTime}
          deliveryType={deliveryType}
        />
      );
      break;
    default:
      orderFooter = (
        <OrderReadyFooter
          orderStatus={orderStatus}
          orderId={orderId}
          deliveryType={deliveryType}
          prepTime={prepTime}
        />
      );
  }
  return <>{orderFooter}</>;
}

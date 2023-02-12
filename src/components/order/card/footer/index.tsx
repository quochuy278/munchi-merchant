import { OrderEnum } from "../../../../shared/enum/enum";
import { FooterProps } from "../../../../shared/interfaces/props.interface";
import {
  OrderAcceptedFooter, OrderPendingFooter, OrderReadyFooter
} from "../../../buttonfooters/order";

export default function OrderFooter({
  orderStatus,
  orderId,
  prepTime,
  deliveryType,
}: FooterProps) {
  let orderFooter = <></>;
  switch (true) {
    case orderStatus === OrderEnum.PENDING:
      orderFooter = (
        <OrderPendingFooter
          orderStatus={orderStatus}
          orderId={orderId}
          prepTime={prepTime}
          deliveryType={deliveryType}
        />
      );
      break;
    case orderStatus === OrderEnum.ACCEPTED_BY_BUSINESS:
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

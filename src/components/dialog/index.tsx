import { DialogProps } from "../../shared/interfaces/props.interface";
import { FactoryDialogContent } from "../factory";

export default function DialogAlert({
  open,
  onClose,
  orderId,
  deliveryType,
  orderStatus,
  newPrepTime,  
}: DialogProps) {
 
  return (
    <FactoryDialogContent
      open={open}
      onClose={onClose}
      orderId={orderId}
      deliveryType={deliveryType}
      orderStatus={orderStatus}
      newPrepTime={newPrepTime}
    />
  );
}

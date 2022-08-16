import { Box } from '@mui/material';
import { Order } from '../../../shared/interfaces/order.interface';
import { DetailOrderDataProps } from '../../../shared/interfaces/props.interface';

import styles from './index.module.css';

import InfoFooter from './infofooter';
import InfoList from './infolist';

export default function InfoCard({ detailOrder }: DetailOrderDataProps) {
  console.log(detailOrder);
  const { customer, timeStamp, status, deliveryType,id } = detailOrder;
  return (
    <Box gridColumn="span 6" className={styles.detail__info__container}>
      <InfoList name={customer.name} deliveryType={deliveryType} />
      <Box className={styles.detail__time__section}>
        <InfoFooter
          timeStamp={timeStamp}
          orderStatus={status}
          deliveryType={deliveryType}
          orderId={id}
        />
      </Box>
    </Box>
  );
}

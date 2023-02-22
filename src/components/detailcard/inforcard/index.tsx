import { Box } from '@mui/material';
import { Order } from '../../../shared/interfaces/order.interface';
import { DetailOrderDataProps } from '../../../shared/interfaces/props.interface';

import styles from './index.module.css';

import InfoFooter from './infofooter';
import InfoList from './infolist';

export default function InfoCard({ data }: any) {
  // console.log(detailOrder);
  const { customer, createdAt, status, deliveryType,id } = data;
  return (
    <Box gridColumn="span 6" className={styles.detail__info__container}>
      <InfoList name={customer.name} deliveryType={deliveryType} />
      <Box className={styles.detail__time__section}>
        <InfoFooter
          timeStamp={createdAt}
          orderStatus={status}
          deliveryType={deliveryType}
          orderId={id}
        />
      </Box>
    </Box>
  );
}

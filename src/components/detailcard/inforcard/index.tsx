import { Box } from '@mui/material';
import { Props } from '../../../shared/types/props.type';
import styles from './index.module.css';

import InfoFooter from './infofooter';
import InfoList from './infolist';

export default function InfoCard({detailOrder}:Props) {
  const { customer, timeStamp,status,delivery_type } = detailOrder;
  return (
    <Box gridColumn="span 6" className={styles.detail__info__container}>
      <InfoList name={customer.name} delivery_type={delivery_type} />
      <Box className={styles.detail__time__section}>
        <InfoFooter
          timeStamp={timeStamp}
          status={status}
          delivery_type={delivery_type}
        />
      </Box>
    </Box>
  );
}

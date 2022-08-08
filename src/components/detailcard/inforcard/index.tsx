import { Box } from '@mui/material';
import styles from './index.module.css';

import InfoFooter from './infofooter';
import InfoList from './infolist';
type Props = {
  detailOrder: any;
};

export default function InfoCard({detailOrder}:Props) {
  const { name, timeStamp,status } = detailOrder;
  return (
    <Box gridColumn="span 6" className={styles.detail__info__container}>
      <InfoList name={name} />

      <Box className={styles.detail__time__section}>
       <InfoFooter timeStamp={timeStamp} status={status}/>
      </Box>
    </Box>
  );
}

import { Box, Button, IconButton, Typography } from '@mui/material';
import React from 'react'
import styles from './index.module.css'
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import TakeoutDiningOutlinedIcon from "@mui/icons-material/TakeoutDiningOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { OrderInfo } from '../../../store/OrderSlice';
import InfoList from './infolist';
import InfoFooter from './infofooter';
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

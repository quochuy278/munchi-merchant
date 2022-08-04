import React from 'react'
import { Box } from "@mui/material";
import styles from "./index.module.css";
import OrderCard from '../card';


type Props = {
  children?: JSX.Element | JSX.Element[];
  ordersData :any
};
export default function OrderCardList({  ordersData }: Props) {
  return (
    <Box
      display="grid"
      className={styles.card__container}
      gridTemplateColumns="repeat(1, 1fr)"
      gap={2}
      paddingX={2}
    >
      <OrderCard ordersData={ordersData} />
    </Box>
  );
}

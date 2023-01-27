import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import DetailContent from "../../components/container/DetailContent";
import InfoCard from "../../components/detailcard/inforcard";
import ItemCard from "../../components/detailcard/itemcard";
import DetailTitle from "../../components/detailcard/title";
import { Order } from "../../shared/interfaces/order.interface";

import { useTypedSelector } from "../../store";
import { selectOrders } from "../../store/order-slice";
import styles from "./index.module.css";


export default function DetailPage() {
  const param = useParams();

  const orderId = param.detailId as string; //string

  const orders = useTypedSelector(selectOrders);
  const detailOrderArray = orders.filter((order: Order) => {
    const numberOrderId = parseInt(orderId);
    return order.id === numberOrderId;
  });

  const detailOrder = detailOrderArray[0] as Order;
  // console.log(
  //   "🚀 ~ file: index.tsx ~ line 26 ~ DetailPage ~ detailOrder",
  //   detailOrder
  // );
  const { id } = detailOrder;

  return (
    <DetailContent>
      <DetailTitle orderId={id} />
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={2}
        className={styles.detail__container}
      >
        <ItemCard detailOrder={detailOrder} />
        <InfoCard detailOrder={detailOrder} />
      </Box>
    </DetailContent>
  );
}

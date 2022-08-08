import { Box } from "@mui/material";
import DetailContent from "../../components/container/DetailContent";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import InfoCard from "../../components/detailcard/inforcard";
import ItemCard from "../../components/detailcard/itemcard";
import DetailTitle from "../../components/detailcard/title";
import { RootState, useTypedSelector } from "../../store";
import styles from "./index.module.css";
import { selectOrders } from "../../store/OrderSlice";



export default function DetailPage() {
  const param = useParams();
 
  const orderId = param.detailId as string; //string
 
   const orders = useTypedSelector(selectOrders);
  const detailOrderArray = orders.filter((order) => {
   const numberOrderId =  parseInt(orderId)
    return order.id === numberOrderId;
  });

  const detailOrder = detailOrderArray[0];
  console.log(
    "🚀 ~ file: index.tsx ~ line 26 ~ DetailPage ~ detailOrder",
    detailOrder
  );
  const {id} = detailOrder;
 
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

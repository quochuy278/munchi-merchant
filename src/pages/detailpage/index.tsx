import { Box } from "@mui/material";
import DetailContent from "../../components/container/DetailContent";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import InfoCard from "../../components/detailcard/inforcard";
import ItemCard from "../../components/detailcard/itemcard";
import DetailTitle from "../../components/detailcard/title";
import { RootState } from "../../store";
import styles from "./index.module.css";



export default function DetailPage() {
  const param = useParams();
  const detailId = param.detailId as string;
  const orders = useSelector((state: RootState) => state.order.orders);
  const detailOrderArray = orders.filter((order) => {
    return order.id === detailId;
  });
  const detailOrder = detailOrderArray[0];
  console.log(
    "🚀 ~ file: index.tsx ~ line 26 ~ DetailPage ~ detailOrder",
    detailOrder
  );
  const { id, items, name, note, status, timeReady, timeStamp } = detailOrder;
  console.log("🚀 ~ file: index.tsx ~ line 28 ~ DetailPage ~ items", items);
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

import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import MainContent from "../../components/container/MainContent";
import OrderCardList from "../../components/order/list";
import OrderTitle from "../../components/order/title";
import { RootState } from "../../store";
import styles from "./index.module.css";

const MainPage = () => {
  const orders = useSelector((state: RootState) => state.order.orders);


  const pendingOrders = orders.filter((order) => {
    return order.status === "pending";
  });
  const acceptedOrders = orders.filter((order) => {
    return order.status === "accepted";
  });
  const readyOrders = orders.filter((order) => {
    return order.status === "ready";
  });
  
  return (
    <MainContent>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={2}
        sx={{ width: "100%", padding: "10px" }}
      >
        {/* Pending */}
        <Box gridColumn="span 4" className={styles.section__container}>
          <OrderTitle
            orderTitle="Pending"
            orderQuantity={pendingOrders.length}
          />
          <OrderCardList ordersData={pendingOrders} />
        </Box>

        {/* Accepted */}

        <Box gridColumn="span 4" className={styles.section__container}>
          <OrderTitle
            orderTitle="Accepted"
            orderQuantity={acceptedOrders.length}
          />
          <OrderCardList ordersData={acceptedOrders} />
        </Box>

        {/* Ready */}

        <Box gridColumn="span 4" className={styles.section__container}>
          <OrderTitle orderTitle="Ready" orderQuantity={readyOrders.length} />
          <OrderCardList ordersData={readyOrders} />
        </Box>
      </Box>
    </MainContent>
  );
};

export default MainPage;

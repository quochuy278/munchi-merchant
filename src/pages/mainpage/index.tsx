import { Box, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainContent from "../../components/container/MainContent";
import OrderCardList from "../../components/order/list";
import OrderTitle from "../../components/order/title";
import styles from "./index.module.css";
import { AppDispatch, useTypedSelector } from "../../store";

import { selectOrders, selectStatus } from "../../store/OrderSlice";
import { fetchOrders } from "../../services/services";
import OrderEnum from "../../shared/enum/enum";

const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const orders = useTypedSelector(selectOrders);
  const statusLoaded = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchOrders({ status: ["pending", "processing", "ready"] }));
  }, []);

  const pendingOrders = orders.filter((order) => {
    return order.status ===  OrderEnum.pending;
  });

  const acceptedOrders = orders.filter((order) => {
    return order.status === OrderEnum.processing;
  });
  const readyOrders = orders.filter((order) => {
    return order.status === OrderEnum.ready;
  });

  return (
    <MainContent>
      {statusLoaded ? (
        <Box
          sx={{ height: "calc(100vh)" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap={2}
          sx={{ width: "100%", padding: "10px" }}
        >
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
      )}
      {/* Pending */}
    </MainContent>
  );
};

export default MainPage;

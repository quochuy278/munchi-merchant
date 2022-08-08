import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainContent from "../../components/container/MainContent";
import OrderCardList from "../../components/order/list";
import OrderTitle from "../../components/order/title";

import { AppDispatch, RootState, useTypedSelector } from "../../store";

import styles from "./index.module.css";
import { fetchOrders, Order, selectOrders } from "../../store/OrderSlice";
import { selectStatus } from "../../store/OrderSlice";
import { ThunkDispatch } from "redux-thunk";

const MainPage =  () => {
  // getOrders();
  const dispatch = useDispatch<AppDispatch>();
  // const {orders} = useSelector((state: RootState) => state.order);

  // const pendingOrders = orders.filter((order) => {
  //   return order.status === "pending";
  // });
  // const acceptedOrders = orders.filter((order) => {
  //   return order.status === "accepted";
  // });
  // const readyOrders = orders.filter((order) => {
  //   return order.status === "ready";
  // });
  const orders = useTypedSelector(selectOrders);
   const statusLoaded = useSelector(selectStatus);
  useEffect(() => {
    console.log("useeffect")
    console.log(orders)
      if (orders.length > 0){
        return;
      }
      
      dispatch(fetchOrders({ status: ["pending", "processing", "ready"] }));
  }, []);

 
  
  // const pendingOrders = orders.filter((order) => {
  //   return order.status ==  "0";
  // });
  // console.log("🚀 ~ file: index.tsx ~ line 39 ~ pendingOrders ~ pendingOrders", pendingOrders)
  // const acceptedOrders = orders.filter((order) => {
  //   return order.status === "accepted";
  // });
  // const readyOrders = orders.filter((order) => {
  //   return order.status === "ready";
  // });
  console.log(orders);
  return (
    <MainContent>
      {/*   <Box
    //     display="grid"
    //     gridTemplateColumns="repeat(12, 1fr)"
    //     gap={2}
    //     sx={{ width: "100%", padding: "10px" }}
  //   > */}

      {/* Pending */}
      {/* // <Box gridColumn="span 4" className={styles.section__container}>
      //     <OrderTitle
      //       orderTitle="Pending"
      //       orderQuantity={pendingOrders.length}
      //     />
      //     <OrderCardList ordersData={pendingOrders} />
      //   </Box> */}

      {/* Accepted */}

      {/* // <Box gridColumn="span 4" className={styles.section__container}>
      //     <OrderTitle
      //       orderTitle="Accepted"
      //       orderQuantity={acceptedOrders.length}
      //     />
      //     <OrderCardList ordersData={acceptedOrders} />
      //   </Box> */}

      {/* Ready */}

      {/* //   <Box gridColumn="span 4" className={styles.section__container}>
      //     <OrderTitle orderTitle="Ready" orderQuantity={readyOrders.length} />
      //     <OrderCardList ordersData={readyOrders} />
      //   </Box>
      // </Box> */}
      {/* {orders.map((order:Order) => {
      return (
        <div>{order.id}</div>
      )
     })} */}
    </MainContent>
  );
};

export default MainPage;

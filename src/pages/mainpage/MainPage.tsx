import { Box } from "@mui/system";
import {
  AcceptedButtonFooter,
  PendingButtonFooter,
  ReadyButtonFooter,
} from "../../components/order/card/footer";
import MainContent from "../../components/container/MainContent";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import styles from "./mainpage.module.css";
import OrderCardList from "../../components/order/list";
import BaseCard from "../../components/order/card";


const CustomeTypography = styled(Typography)(({ theme }) => ({
  color: "black",
  fontSize: "16px",
  fontWeight: 600,
}));

const CustomeBox = styled(Box)(({ theme }) => ({
  height: "26px",
  width: "26px",
  backgroundColor: "white",
  textAlign: "center",
  marginLeft: "10px",
}));

const MainPage = () => {
  const pendingOrders = useSelector((state: RootState) =>
    state.order.orders.filter((order) => order.status === "pending")
  );
  console.log(
    "🚀 ~ file: MainPage.tsx ~ line 39 ~ MainPage ~ pendingOrders",
    pendingOrders
  );
  const acceptedOrders = useSelector((state: RootState) => {
    console.log("running");
    return state.order.orders.filter((order) => order.status === "accepted");
  });
  console.log(
    "🚀 ~ file: MainPage.tsx ~ line 43 ~ MainPage ~ acceptedOrders",
    acceptedOrders
  );
  const readyOrders = useSelector((state: RootState) =>
    state.order.orders.filter((order) => order.status === "ready")
  );
  console.log("🚀 ~ file: MainPage.tsx ~ line 54 ~ MainPage ~ readyOrders", readyOrders)
  if (pendingOrders === undefined) console.log('undefined')
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
          <Box
            gridColumn="span 2"
            className={styles.section__header}
            display="flex"
          >
            <CustomeTypography variant="h5">Pending</CustomeTypography>
            <CustomeBox>2</CustomeBox>
          </Box>
          <OrderCardList>
            <BaseCard itemData={pendingOrders}>
              <PendingButtonFooter />
            </BaseCard>
          </OrderCardList>
        </Box>

        {/* Accepted */}
        {/* 
        <Box gridColumn="span 4" className={styles.section__container}>
          <Box
            gridColumn="span 2"
            className={styles.section__header}
            display="flex"
          >
            <CustomeTypography variant="h5">Accepted</CustomeTypography>
            <CustomeBox>2</CustomeBox>
          </Box>
          <OrderCardList>
            <BaseCard itemData={acceptedOrders}>
              <AcceptedCardList />
            </BaseCard>
          </OrderCardList>
        </Box> */}

        {/* Ready */}

        {/* <Box gridColumn="span 4" className={styles.section__container}>
          <Box
            gridColumn="span 2"
            className={styles.section__header}
            display="flex"
          >
            <CustomeTypography variant="h5">Ready</CustomeTypography>
            <CustomeBox>2</CustomeBox>
          </Box>
          <Box
            display="grid"
            className="card__container"
            gridTemplateColumns="repeat(1, 1fr)"
            gap={2}
            paddingX={2}
          >
            <OrderCardList>
              <BaseCard itemData={readyOrders}>
                <ReadyButton />
              </BaseCard>
            </OrderCardList>
          </Box>
        </Box> */}
      </Box>
    </MainContent>
  );
};

export default MainPage;

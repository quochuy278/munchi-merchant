import { Box } from "@mui/system";
import {
  AcceptedButtonFooter,
  PendingButtonFooter,
  ReadyButtonFooter,
} from "../../components/ordercard/Footer";
import MainContent from "../../container/MainContent";
import BaseActionCard from "../../components/ordercard/BaseCard";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import styles from "./mainpage.module.css";
import PendingCardList from "../../components/cartlist/PendingCardList";
import AcceptedCardList from "../../components/cartlist/AcceptedCardList";
import { OrdersObject } from "../../store/OrderSlice";
import { useState } from "react";
import BaseCard from "../../components/ordercard/BaseCard";
import ReadyCardList from "../../components/cartlist/ReadyCardList";

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
          <PendingCardList>
            <BaseCard itemData={pendingOrders}>
              <PendingButtonFooter />
            </BaseCard>
          </PendingCardList>
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
          <AcceptedCardList>
            <BaseCard itemData={acceptedOrders}>
              <AcceptedCardList />
            </BaseCard>
          </AcceptedCardList>
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
            <ReadyCardList>
              <BaseCard itemData={readyOrders}>
                <ReadyButton />
              </BaseCard>
            </ReadyCardList>
          </Box>
        </Box> */}
      </Box>
    </MainContent>
  );
};

export default MainPage;

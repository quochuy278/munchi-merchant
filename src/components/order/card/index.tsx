import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import DiningIcon from "@mui/icons-material/Dining";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TakeoutDiningOutlinedIcon from "@mui/icons-material/TakeoutDiningOutlined";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import OrderEnum from "../../../shared/enum/enum";
import { Order, ProductItem } from "../../../shared/interfaces/order.interface";
import {
  OrderDataProps,
  OrderProductListProps,
} from "../../../shared/interfaces/props.interface";
import { FactoryIconInfo } from "../../factory";

import { ExpandMore } from "../../customcomponents/mui";
import OrderFooter from "./footer";
import styles from "./index.module.css";

export default function OrderCard({ ordersData }: OrderDataProps) {
  const [selectedOrderIDs, setSelectedOrderIDs] = useState<number[]>([]);
  const { t } = useTranslation("common");
  const navigate = useNavigate();
  // const clickHandler = (event: any, status: string, orderId: string) => {
  //   switch (expanded) {
  //     case true: {
  //       navigate(`/detail/${orderId}`);
  //       break;
  //     }
  //     case false: {
  //       console.log("show expanded");
  //       break;
  //     }
  //   }

  //   event.preventDefault();
  // };
  const handleOrderPressed = (id: number) => () => {
    setSelectedOrderIDs((prevState) =>
      prevState.includes(id)
        ? // If ID is already selected, remove it
          prevState.filter((orderId) => orderId !== id)
        : // If ID is not selected, add it
          [...prevState, id]
    );
  };
  const ProductListFactory = ({
    productList,
    orderId,
  }: OrderProductListProps) => {
    console.log(ordersData);
    const productLength = productList.length;
    switch (true) {
      case productLength <= 5:
        return (
          <Box>
            {productList?.map((product: ProductItem) => {
              return (
                <Box key={product.id} className={styles.product_item_container}>
                  <Box display="flex" width="90%" textAlign="left">
                    <Typography
                      fontSize="14px"
                      lineHeight="16px"
                      fontWeight={600}
                    >
                      {product.quantity}
                    </Typography>
                    <Typography
                      fontSize="14px"
                      lineHeight="16px"
                      fontWeight={600}
                      sx={{ marginX: "20px" }}
                    >
                      x
                    </Typography>

                    <Typography
                      fontSize="14px"
                      lineHeight="16px"
                      fontWeight={600}
                      sx={{ marginX: "20px" }}
                    >
                      {product.name}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        );
      case productLength > 5:
        const renderProduct = productList!.slice(0, 2);
        const filterProduct = productList!.filter(
          (item: ProductItem, index: number) => index >= 2
        );
        // console.log(renderProduct);
        return (
          <Box className={styles.product_item_container}>
            <Box
              display="flex"
              width="90%"
              textAlign="left"
              flexDirection={"column"}
              justifyContent="center"
            >
              {renderProduct.map((product: ProductItem) => {
                return (
                  <Box
                    display={"flex"}
                    key={product.id}
                    sx={{ padding: "5px" }}
                    width="100%"
                  >
                    <Typography
                      fontSize="14px"
                      lineHeight="16px"
                      fontWeight={600}
                    >
                      {product.quantity}
                    </Typography>
                    <Typography
                      fontSize="14px"
                      lineHeight="16px"
                      fontWeight={600}
                      sx={{ marginX: "20px" }}
                    >
                      x
                    </Typography>
                    <Typography
                      fontSize="14px"
                      lineHeight="16px"
                      fontWeight={600}
                      sx={{ marginX: "20px" }}
                    >
                      {product.name}
                    </Typography>
                  </Box>
                );
              })}
              <Accordion
                key={orderId}
                expanded={selectedOrderIDs.includes(orderId)}
                onChange={handleOrderPressed(orderId)}
                sx={{
                  boxShadow: "none",
                  "&:before": {
                    display: "none",
                  },
                }}
                TransitionProps={{ unmountOnExit: true }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  See more
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0, paddingY: 2 }}>
                  {filterProduct.map((product: any) => {
                    return (
                      <Box
                        display={"flex"}
                        key={product.id}
                        sx={{ padding: "5px" }}
                        width="100%"
                      >
                        <Typography
                          fontSize="14px"
                          lineHeight="16px"
                          fontWeight={600}
                        >
                          {product.quantity}
                        </Typography>
                        <Typography
                          fontSize="14px"
                          lineHeight="16px"
                          fontWeight={600}
                          sx={{ marginX: "20px" }}
                        >
                          x
                        </Typography>

                        <Typography
                          fontSize="14px"
                          lineHeight="16px"
                          fontWeight={600}
                          sx={{ marginX: "20px", opacity: "0.98px" }}
                        >
                          {product.name}
                        </Typography>
                      </Box>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        );
      default:
        return (
          <Box>
            {productList?.map((product: ProductItem) => {
              return (
                <Box key={product.id} className={styles.product_item_container}>
                  <Box display="flex" width="90%" textAlign="left">
                    <Typography
                      fontSize="14px"
                      lineHeight="16px"
                      fontWeight={600}
                    >
                      {product.quantity}
                    </Typography>
                    <Typography
                      fontSize="14px"
                      lineHeight="16px"
                      fontWeight={600}
                      sx={{ marginX: "20px" }}
                    >
                      x
                    </Typography>

                    <Typography
                      fontSize="14px"
                      lineHeight="16px"
                      fontWeight={600}
                      sx={{ marginX: "20px" }}
                    >
                      {product.name}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        );
    }
  };
  return (
    <>
      {ordersData.map((order: Order, index: number) => {
        return (
          <Box className={styles.main__card__container} key={order.id}>
            <Box component="form">
              <Box
                display="flex"
                sx={{ width: "100%" }}
                justifyContent="space-between"
                alignItems="center"
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ width: "40%" }}
                >
                  <Typography
                    lineHeight="29px"
                    fontSize="22px"
                    fontWeight={600}
                    textAlign="left"
                  >
                    # {order.id}
                  </Typography>
                  <div className={styles.divider}></div>
                  <Typography
                    lineHeight="18px"
                    fontSize="14px"
                    fontWeight={600}
                  >
                    {order.customer.name}
                  </Typography>
                </Box>
                <Box>
                  <IconButton
                    sx={{
                      borderRadius: "3px",
                      border: "1px solid #F3F5F7",
                      opacity: 1,
                    }}
                  >
                    <FactoryIconInfo orderType={order.deliveryType} />
                  </IconButton>
                </Box>
              </Box>
              <Typography
                textAlign="left"
                sx={{ color: "#707070" }}
                fontSize="8px"
                lineHeight="10px"
              >
                {t("timeStamp.day.0")} at {order.timeStamp}
              </Typography>
              <Box className={styles.card__item__container}>
                <ProductListFactory
                  productList={order.products}
                  orderId={order.id}
                />
              </Box>
              <Card
                sx={{
                  backgroundColor: "#F3F5F7",
                  width: "fit-content",
                  padding: 0.75,
                  marginTop: "5px",
                }}
              >
                <Typography fontSize="10px" lineHeight="13px">
                  {order.comment}
                </Typography>
              </Card>
            </Box>
            <OrderFooter
              orderStatus={order.status}
              orderId={order.id}
              deliveryType={order.deliveryType}
              prepTime={order.prepTime}
            />
          </Box>
        );
      })}
    </>
  );
}

import { Card, Divider, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import styles from "./baseactioncard.module.css";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import { useDispatch, useSelector } from "react-redux";
import { OrderInfo, OrdersObject } from "../../../store/OrderSlice";
import { AcceptedButtonFooter, PendingButtonFooter, ReadyButtonFooter } from "./footer";

const Item1 = {
  items: [
    {
      id: 1,
      quantity: 1,
      name: "Veggie burger with margarita on top of The burger double patty.",
    },
    {
      id: 2,
      quantity: 2,
      name: "Juicy Original without mayo",
    },
    {
      id: 3,
      quantity: 1,
      name: "Cuban Fritata",
    },
    {
      id: 4,
      quantity: 1,
      name: "The New York",
    },
  ],
  note: "No tomatoe please",
};

const Item2 = {
  items: [
    {
      id: 1,
      quantity: 1,
      name: "Veggie taco",
    },
    {
      id: 2,
      quantity: 1,
      name: "Sweet potato fries(modified)",
    },
    {
      id: 3,
      quantity: 1,
      name: "Chicken Taco",
    },
  ],
  note: "No cultery please",
};

type Props = {
  children?: JSX.Element | JSX.Element[];
  footer?: ( id:string ) => JSX.Element | JSX.Element[];
  itemData?: OrderInfo[]
};
const filterStatusCard = (status: string) => {
  let FooterButton = <></>;

    if (status === "pending") {
      FooterButton = <BaseCard footer={() => <PendingButtonFooter />} />;
    } else if (status === "accepted") {
      FooterButton = <BaseCard footer={() => <AcceptedButtonFooter />} />;
    } else if (status === "ready") {
      FooterButton = <BaseCard footer={() => <ReadyButtonFooter />} />;
    }
  return FooterButton as JSX.Element;
};
export default function BaseCard({ footer, itemData = [] }: Props) {
  
  console.log(itemData)
  if( itemData == undefined) {
    return <div>
      Something wrong happned
    </div>
  }
  return (
    <>
      {itemData.map((order) => {
        return (
          <Box className={styles.main__card__container} key={order.id}>
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
                sx={{ width: "50%" }}
              >
                <Typography
                  lineHeight="29px"
                  fontSize="22px"
                  fontWeight={600}
                  textAlign="left"
                >
                  {order.id}
                </Typography>
                <div className={styles.divider}></div>
                <Typography lineHeight="18px" fontSize="14px" fontWeight={600}>
                  {order.name}
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
                  <TakeoutDiningIcon
                    sx={{ width: "16px", height: "14px", marginX: 1 }}
                  />
                  <Typography lineHeight="13px" fontSize="10px">
                    Takeaway
                  </Typography>
                </IconButton>
              </Box>
            </Box>
            <Typography
              textAlign="left"
              sx={{ color: "#707070" }}
              fontSize="8px"
              lineHeight="10px"
            >
              Today at 15:30
            </Typography>
            <Box className={styles.card__item__container}>
              {order.items.map((item) => {
                return (
                  <Box sx={{ padding: "3px", textAlign: "left" }} key={item.id}>
                    <Typography
                      sx={{ color: "#4D505A" }}
                      fontSize="12px"
                      lineHeight="16px"
                    >
                      {item.quantity} x {item.name}
                    </Typography>
                  </Box>
                );
              })}
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
                {order.note}
              </Typography>
            </Card>
            <Box>{filterStatusCard(order.status)}</Box>
          </Box>
        );
      })}
    </>
  );
}

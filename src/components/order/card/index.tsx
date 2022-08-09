import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import DiningIcon from "@mui/icons-material/Dining";
import TakeoutDiningOutlinedIcon from "@mui/icons-material/TakeoutDiningOutlined";
import { Card, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Props } from "../../../shared/types/props.type";
import OrderFooter from "./footer";
import styles from "./index.module.css";
export type FactoryIcon = {
  orderType: number;
};

export const FactoryIconInfo = ({ orderType }: FactoryIcon) => {
  switch (orderType) {
    case 3:
      return (
        <Box display="flex">
          <DiningIcon sx={{ width: "16px", height: "14px", marginX: 1 }} />
          <Typography fontSize="10px" lineHeight="13px">
            Eat In
          </Typography>
        </Box>
      );
    case 1:
      return (
        <Box display="flex">
          <DeliveryDiningIcon
            sx={{ width: "16px", height: "14px", marginX: 1 }}
          />
          <Typography fontSize="10px" lineHeight="13px">
            Delivery
          </Typography>
        </Box>
      );
    case 2:
      return (
        <Box display="flex">
          <DiningIcon sx={{ width: "16px", height: "14px", marginX: 1 }} />
          <Typography fontSize="10px" lineHeight="13px">
            Eat In
          </Typography>
        </Box>
      );
    case null:
      return null;
    default:
      return (
        <Box display="flex">
          <TakeoutDiningOutlinedIcon
            sx={{ width: "16px", height: "14px", marginX: 1 }}
          />
          <Typography fontSize="10px" lineHeight="13px">
            Take out
          </Typography>
        </Box>
      );
  }
};

export default function OrderCard({ ordersData }: Props) {
  console.log(
    "🚀 ~ file: index.tsx ~ line 54 ~ OrderCard ~ ordersData",
    ordersData
  );
  const navigate = useNavigate();

  let noOrder = (
    <>
      <div>No Pending Order at the moment</div>
    </>
  );
  const clickHandler = (event: any, status: string, orderId: string) => {
    navigate(`./detail/${orderId}`);
    event.preventDefault();
  };

  return (
    <>
      {ordersData.map((order: any) => {
        console.log(order.delivery_type);
        return (
          <Box className={styles.main__card__container} key={order.id}>
            <Box
              component="form"
              onClick={(event: any) =>
                clickHandler(event, order.status, order.id)
              }
            >
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
                    <FactoryIconInfo orderType={order.delivery_type} />
                  </IconButton>
                </Box>
              </Box>
              <Typography
                textAlign="left"
                sx={{ color: "#707070" }}
                fontSize="8px"
                lineHeight="10px"
              >
                Today at {order.timestamp}
              </Typography>
              <Box className={styles.card__item__container}>
                {order.products.map((product: any) => {
                  return (
                    <Box
                      key={product.id}
                      className={styles.product_item_container}
                    >
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
                      {/* <Box
                        display="flex"
                        width="100%"
                        sx={{ marginLeft: "15px" }}
                      >
                        <Typography
                          fontSize="12px"
                          lineHeight="16px"
                          fontWeight={600}
                        >
                          1
                        </Typography>
                        <Typography
                          fontSize="12px"
                          lineHeight="16px"
                          fontWeight={600}
                          sx={{ marginX: "20px" }}
                        >
                          x
                        </Typography>

                        <Typography
                          fontSize="12px"
                          lineHeight="16px"
                          fontWeight={600}
                          sx={{ marginX: "20px" }}
                        >
                          BBQ SAuce
                        </Typography>
                      </Box> */}
                      {/* here */}
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
                  {order.comment}
                </Typography>
              </Card>
            </Box>
            <OrderFooter orderStatus={order.status} orderId={order.id} />
          </Box>
        );
      })}
    </>
  );
}

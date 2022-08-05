import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import { Card, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import OrderFooter from "./footer";
import styles from "./index.module.css";


type Props = {
  children?: JSX.Element | JSX.Element[];
  footer?: ( id:string ) => JSX.Element | JSX.Element[];
  ordersData?: any
};

export default function OrderCard({ ordersData }: Props) {
  return (
    <>
      {ordersData.map((order:any) => {
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
              Today at {order.timestamp}
            </Typography>
            <Box className={styles.card__item__container}>
              {order.items.map((item: any) => {
                return (
                  <Box
                    sx={{ padding: "3px", textAlign: "left", display: "flex" }}
                    key={item.id}
                  >
                    <Typography
                      sx={{ color: "#4D505A", display: "flex" }}
                      fontSize="14px"
                      lineHeight="16px"
                      fontWeight={600}
                    >
                      {item.quantity}
                      <Typography
                        sx={{ marginX: "10px", textTransform: "none" }}
                        fontSize="14px"
                        lineHeight="16px"
                        fontWeight={600}
                      >
                        x
                      </Typography>
                      <Typography
                        fontSize="14px"
                        lineHeight="16px"
                        fontWeight={600}
                        sx={{ marginX: "10px",width:"100%" }}
                      >
                        {item.name}
                      </Typography>
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
            <OrderFooter orderStatus={order.status} orderId={order.id} />
          </Box>
        );
      })}
    </>
  );
}

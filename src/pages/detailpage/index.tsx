import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import DetailContent from "../../components/container/DetailContent";
import MainContent from "../../components/container/MainContent";
import DetailTitle from "../../components/detail/title";
import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import styles from "./index.module.css";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import TakeoutDiningOutlinedIcon from "@mui/icons-material/TakeoutDiningOutlined";

const timeAvailable = [1, 5, 10, 15, 20, 30];

export default function DetailPage() {
  return (
    <DetailContent>
      <DetailTitle orderId="42244" />
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={2}
        className={styles.detail__container}
      >
        <Box gridColumn="span 6" className={styles.detail__content}>
          <Box className={styles.detail__card}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              className={styles.detail__title}
            >
              <Typography fontSize="18px" lineHeight="24px" fontWeight={600}>
                6 items
              </Typography>
              <IconButton
                sx={{ backgroundColor: "#F2F9FE", borderRadius: "8px" }}
              >
                <PrintIcon
                  sx={{ marginRight: "10px", width: "14px", height: "14px" }}
                  color="primary"
                />
                <Typography fontSize="12px" lineHeight="16px">
                  Print
                </Typography>
              </IconButton>
            </Box>
            <Divider sx={{ width: "100%", marginTop: "10px" }} />
            <Box className={styles.detail__item}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{ width: "40%" }}
                textAlign="left"
              >
                <Typography>1</Typography>
                <CloseIcon
                  sx={{ color: "#000000", width: "10px", height: "10px" }}
                />
                <Box>
                  <Typography fontSize="12px" lineHeight="16px">
                    Veggie burger
                  </Typography>
                  <Typography
                    fontSize="12px"
                    lineHeight="16px"
                    sx={{ color: "#51545E" }}
                  >
                    Add ons: 1x chipotle sauce
                  </Typography>
                </Box>
              </Box>
              <Box textAlign="right">
                <Typography fontSize="12px" lineHeight="16px">
                  12.10 €
                </Typography>
                <Typography
                  fontSize="12px"
                  lineHeight="16px"
                  sx={{ color: "#51545E" }}
                >
                  + 2.20 €
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ width: "100%", marginTop: "10px" }} />
            <Box className={styles.detail__item}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{ width: "40%" }}
                textAlign="left"
              >
                <Typography>2</Typography>
                <CloseIcon
                  sx={{ color: "#000000", width: "10px", height: "10px" }}
                />
                <Box>
                  <Typography fontSize="12px" lineHeight="16px">
                    Veggie burger
                  </Typography>
                  <Typography
                    fontSize="12px"
                    lineHeight="16px"
                    sx={{ color: "#51545E" }}
                  >
                    Add ons: 1x chipotle sauce
                  </Typography>
                </Box>
              </Box>
              <Box textAlign="right">
                <Typography fontSize="12px" lineHeight="16px">
                  12.10 €
                </Typography>
                <Typography
                  fontSize="12px"
                  lineHeight="16px"
                  sx={{ color: "#51545E" }}
                >
                  + 2.20 €
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={styles.payment_container}>
            <Divider sx={{ width: "100%", marginBottom: "20px" }} />
            <Box className={styles.payment_content}>
              <Box>
                <IconButton
                  sx={{
                    backgroundColor: "#FDF4F3",
                    borderRadius: "8px",
                    width: "102px",
                  }}
                >
                  <CloseIcon
                    sx={{
                      color: "#FF5F5F",
                      width: "12px",
                      height: "12px",
                      marginRight: "10px",
                    }}
                  />
                  <Typography
                    fontSize="12px"
                    lineHeight="16px"
                    sx={{ color: "#FF5F5F" }}
                    fontWeight={600}
                  >
                    Reject
                  </Typography>
                </IconButton>
              </Box>
              <Box sx={{ width: "45%" }}>
                <Box
                  display="flex"
                  sx={{ width: "100%" }}
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography
                      fontSize="12px"
                      lineHeight="16px"
                      sx={{ color: "#51545E" }}
                    >
                      Tax
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      fontSize="12px"
                      lineHeight="16px"
                      sx={{ color: "#51545E" }}
                    >
                      3.8 €
                    </Typography>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  sx={{ width: "100%" }}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box display="flex" alignItems="flex-end">
                    <Typography
                      fontSize="12px"
                      lineHeight="16px"
                      sx={{ color: "#000000" }}
                    >
                      Order Total
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      fontSize="30px"
                      lineHeight="39px"
                      sx={{ color: "#000000" }}
                    >
                      {" "}
                      25.90 €
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box gridColumn="span 6" className={styles.detail__info__container}>
          <Box className={styles.detail__info}>
            <Box className={styles.detail__info__bar}>
              <Box sx={{ marginX: "10px" }}>
                <Typography fontSize="10px" lineHeight="13px">
                  Customer
                </Typography>
                <Typography fontSize="18px" lineHeight="24px">
                  Mario H.
                </Typography>
              </Box>
              <IconButton
                sx={{
                  marginX: "10px",
                  backgroundColor: "#F2F9FE",
                  borderRadius: "8px",
                  width: "40px",
                }}
              >
                <PhoneOutlinedIcon
                  sx={{ width: "14px", height: "14px" }}
                  color="primary"
                />
              </IconButton>
              <IconButton
                sx={{
                  marginX: "10px",
                  backgroundColor: "#F2F9FE",
                  borderRadius: "8px",
                  width: "40px",
                }}
              >
                <ChatBubbleOutlineOutlinedIcon
                  sx={{ width: "14px", height: "14px" }}
                  color="primary"
                />
              </IconButton>
            </Box>

            <Box sx={{ padding: "20px" }}>
              <Box className={styles.detail__icon__container}>
                <TakeoutDiningOutlinedIcon sx={{ color: "#707070" }} />
                <Typography fontSize="8px" lineHeight="10px">
                  Take away
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className={styles.detail__time__section}>
            <Box className={styles.detail__time__info}>
              <Typography fontSize="10px" lineHeight="13px" fontWeight={500}>
                Created
              </Typography>
              <Typography fontSize="10px" lineHeight="13px">
                15:41
              </Typography>
              <Box sx={{marginTop: "10px"}}>
              
                <Typography fontSize="18px" lineHeight="24px">
                  Ready in
                </Typography>
              </Box>
            </Box>

            <Box
              display="grid"
              gridTemplateColumns="repeat(4, 1fr)"
              sx={{
                padding: "10px",
                height: "calc(100% - 150px)",
              }}
              gap={1}
            >
              {timeAvailable.map((time) => {
                return (
                  <Box gridColumn="span 1">
                    <Button
                      variant="contained"
                      className={styles.time__btn}
                      sx={{
                        backgroundColor: "#F3F5F7",
                        color: "black",
                        padding: 0,
                        borderRadius: "8px",
                      }}
                    >
                      <Box>
                        <Typography fontSize="20px" lineHeight="26px">
                          {time}
                        </Typography>
                        <Typography
                          fontSize="8px"
                          lineHeight="10px"
                          textTransform="none"
                        >
                          mins
                        </Typography>
                      </Box>
                    </Button>
                  </Box>
                );
              })}

              <Box gridColumn="span 2">
                <Button
                  variant="contained"
                  className={styles.time__btn}
                  sx={{
                    backgroundColor: "#F3F5F7",
                    color: "black",
                    width: "calc(100% - 15px)",
                    borderRadius: "8px",
                  }}
                >
                  <Typography>Custom</Typography>
                </Button>
              </Box>
              <Box gridColumn="span 4">
                <Button
                  variant="contained"
                  className={styles.time__btn}
                  sx={{
                    backgroundColor: "#F3F5F7",
                    color: "black",
                    width: "calc(100% - 15px)",
                    borderRadius: "8px",
                  }}
                >
                  <Typography>Accept</Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </DetailContent>
  );
}

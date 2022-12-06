import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  DetailFooterChildProps,
  DetailFooterProps,
} from "../../../shared/interfaces/props.interface";
import DialogAlert from "../../dialog";
import { FactoryButton } from "../../factory";
import styles from "./index.module.css";
const timeAvailable = [1, 5, 10, 15, 20, 30];
export const DetailInfoReadyFooter = ({
  deliveryType,
  timeStamp,
  orderStatus,
  orderId,
}: DetailFooterChildProps) => {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const [newPrepTime, setNewPrepTime] = useState(10);

  const acceptDialogCloseHandler = () => {
    setOpen(false);
  };
  const setTimeHandler = (event: any, time: number) => {
    event.preventDefault();
    event.stopPropagation();
    if (time) setNewPrepTime(time);
    else setNewPrepTime(event.target.value);
  };
  const acceptHandler = () => {
    setOpen(true);
  };
  return (
    <Box
      display="flex"
      width="calc(100% - 30px)"
      height="100%"
      flexDirection="column"
      justifyContent="space-between"
      padding="15px"
    >
      <Box height="50%" textAlign="left">
        <Box sx={{ marginY: "20px" }}>
          <Typography fontSize="10px" lineHeight="13px" fontWeight={500}>
            {t("timeStamp.create")}
          </Typography>
          <Typography fontSize="10px" lineHeight="13px">
            15:41
          </Typography>
        </Box>
        <Box sx={{ marginY: "20px" }}>
          <Typography fontSize="10px" lineHeight="13px" fontWeight={500}>
            {t("timeStamp.accepted")}
          </Typography>
          <Typography fontSize="10px" lineHeight="13px">
            15:41
          </Typography>
        </Box>
        <Box sx={{ marginY: "20px" }}>
          <Typography fontSize="10px" lineHeight="13px" fontWeight={500}>
            {t("timeStamp.marked__ready")}
          </Typography>
          <Typography fontSize="10px" lineHeight="13px">
            15:41
          </Typography>
        </Box>
      </Box>
      <Box
        height="50%"
        display="flex"
        flexDirection="column"
        width="100%"
        justifyContent="space-between"
      >
        <Box width="100%" height="30%" display="flex" alignItems="center">
          <Typography
            fontSize="20px"
            lineHeight="26px"
            fontWeight={800}
            fontFamily="DM-sans-bold"
          >
            {t("buttonContent.4")}
          </Typography>
        </Box>
        <Box
          width="100%"
          textAlign="center"
          height="30%"
          sx={{ backgroundColor: "#F1F6ED", color: "#759F47" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          borderRadius="8px"
          marginBottom="10px"
        >
          <Typography
            fontSize="20px"
            lineHeight="26px"
            fontWeight={800}
            fontFamily="DM-sans-bold"
          >
            10
          </Typography>
          <Typography
            fontSize="8px"
            lineHeight="10px"
            fontWeight={800}
            fontFamily="DM-sans-bold"
          >
            mins
          </Typography>
        </Box>
        <Box width="100%" height="30%">
          <Button
            variant="contained"
            sx={{ width: "100%", height: "100%", borderRadius: "8px" }}
            onClick={acceptHandler}
          >
            <FactoryButton deliveryType={deliveryType} />
          </Button>
        </Box>
        <DialogAlert
          open={open}
          newPrepTime={newPrepTime}
          onClose={acceptDialogCloseHandler}
          orderId={orderId}
          deliveryType={deliveryType}
          orderStatus={orderStatus}
          prepTime={newPrepTime}
        />
      </Box>
    </Box>
  );
};

export const DetailInfoPendingFooter = ({
  orderStatus,
  timeStamp,
  orderId,
  deliveryType,
}: DetailFooterChildProps) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [newPrepTime, setNewPrepTime] = useState(10);
  const { t } = useTranslation("common");
  const InputVisibleHandler = () => {
    setInputVisible(true);
  };
  const setTimeHandler = (event: any, time: number) => {
    event.preventDefault();
    event.stopPropagation();
    if (time) setNewPrepTime(time);
    else setNewPrepTime(event.target.value);
  };
  const acceptHandler = () => {
    setOpen(true);
  };

  const acceptDialogCloseHandler = () => {
    setOpen(false);
  };
  return (
    <>
      <Box className={styles.detail__time__info}>
        <Typography fontSize="10px" lineHeight="13px" fontWeight={500}>
          {t("timeStamp.create")} {timeStamp}
        </Typography>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        sx={{
          padding: "20px",
          height: "calc(100% - 80px)",
        }}
        gap={1}
        rowGap={1}
      >
        <Box
          gridColumn="span 4"
          sx={{ padding: 0 }}
          display="flex"
          alignItems="center"
        >
          <Typography
            fontSize="20px"
            lineHeight="26px"
            fontWeight={800}
            fontFamily="DM-sans-bold"
          >
            {t("buttonContent.4")}
          </Typography>
          <TextField
            id="outlined-basic"
            label="Time"
            variant="outlined"
            {...(inputVisible
              ? { sx: { marginLeft: "20px" } }
              : { sx: { marginLeft: "20px", display: "none" } })}
            type="number"
            inputProps={{ maxLength: 3 }}
            onChange={(e: any) => {
              setNewPrepTime(e.target.value);
            }}
          />
        </Box>
        {timeAvailable.map((time, index) => {
          return (
            <Box gridColumn="span 1" key={`${index}`}>
              <Button
                variant="contained"
                className={styles.time__btn}
                {...(time === newPrepTime
                  ? {
                      sx: {
                        backgroundColor: "#F1F6ED",
                        color: "black",
                        padding: 0,
                        borderRadius: "8px",
                        boxShadow: "none",

                        "&:focus": {
                          backgroundColor: "#F1F6ED",
                          color: "#74A047",
                        },
                        "&:active": {
                          backgroundColor: "#5D8139",
                          color: "white",
                        },
                        "&.MuiButton-selected": {
                          backgroundColor: "#F1F6ED",
                          color: "#74A047",
                        },
                        "&:hover": {
                          backgroundColor: "#759F47",
                          color: "#F1F6ED",
                        },
                      },
                    }
                  : {
                      sx: {
                        backgroundColor: "#F3F5F7",
                        color: "black",
                        padding: 0,
                        borderRadius: "8px",
                        boxShadow: "none",
                        "&:focus": {
                          backgroundColor: "#F1F6ED",
                          color: "#74A047",
                        },
                        "&:active": {
                          backgroundColor: "#5D8139",
                          color: "white",
                        },
                        "&.MuiButton-selected": {
                          backgroundColor: "#F1F6ED",
                          color: "#74A047",
                        },
                        "&:hover": {
                          backgroundColor: "#759F47",
                          color: "#F1F6ED",
                        },
                      },
                    })}
                onClick={(event) => setTimeHandler(event, time)}
              >
                <Box>
                  <Typography
                    fontSize="20px"
                    lineHeight="26px"
                    fontFamily="DM-sans-bold"
                  >
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
              width: "100%",
              borderRadius: "8px",
              boxShadow: "none",
              "&:hover": {
                color: "white",
              },
            }}
            onClick={InputVisibleHandler}
          >
            <Typography>{t("buttonContent.5")}</Typography>
          </Button>
        </Box>
        <Box gridColumn="span 2">
          <Button
            variant="contained"
            className={styles.time__btn}
            sx={{
              backgroundColor: "#FDF4F3",
              color: "black",
              width: "100%",
              borderRadius: "8px",
              boxShadow: "none",
              "&:active": {
                backgroundColor: "#FF2828",
                svg: {
                  color: "white",
                },
              },
              "&:focus": {
                border: "none",
              },
              "&:hover": {
                backgroundColor: "#FF2828",
                color: "white",
              },
            }}
            disableFocusRipple={true}
            disableTouchRipple={true}
          >
            <Typography>{t("buttonContent.0")}</Typography>
          </Button>
        </Box>
        <Box gridColumn="span 2">
          <Button
            {...(newPrepTime ? { variant: "contained" } : { disabled: true })}
            variant="contained"
            className={styles.time__btn}
            sx={{
              backgroundColor: "#F3F5F7",
              color: "black",
              width: "100%",
              borderRadius: "8px",
              boxShadow: "none",
              "&:hover": {
                color: "white",
              },
            }}
            onClick={acceptHandler}
          >
            <Typography>{t("buttonContent.6")}</Typography>
          </Button>
          <DialogAlert
            open={open}
            newPrepTime={newPrepTime}
            onClose={acceptDialogCloseHandler}
            orderId={orderId}
            deliveryType={deliveryType}
            orderStatus={orderStatus}
            prepTime={newPrepTime}
          />
        </Box>
      </Box>
    </>
  );
};

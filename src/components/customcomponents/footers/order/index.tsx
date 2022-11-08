import { Box, Button, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FooterProps } from "../../../../shared/interfaces/props.interface";
import DialogAlert from "../../../dialog";
import { CustomAcceptedButton, CustomReadyButton } from "../../mui";
import CloseIcon from "@mui/icons-material/Close";
import { useCountdown } from "../../../../hooks/useCountdown";
import ClockComponent from "../../../countdownlock";

export const OrderReadyFooter = ({ orderStatus, orderId }: FooterProps) => {
  return (
    <CustomReadyButton variant="contained">
      <Typography sx={{ color: "white", opacity: 0.98 }} fontSize="13px">
        Completed
      </Typography>
    </CustomReadyButton>
  );
};

export const OrderAcceptedFooter = ({
  orderStatus,
  orderId,
  prepTime,
  deliveryType,
}: FooterProps) => {
  const { t } = useTranslation("common");
  const [newPrepTime, setNewPrepTime] = useState(10);
  const [open, setOpen] = useState(false);
  const acceptHandler = () => {
    setOpen(true);
  };

  const acceptDialogCloseHandler = () => {
    setOpen(false);
  };

  const prepTimeInMs = prepTime * 60 * 1000;
  const nowInMs = new Date().getTime();

  const dateTimeAfterPrepTime = prepTimeInMs + nowInMs;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ marginTop: "15px" }}
    >
      <Box
        sx={{
          width: "25%",
          height: "50px",
          backgroundColor: "#FDF4F3",
        }}
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        marginRight={2}
        borderRadius="8px"
      >
        <ClockComponent targetDate={dateTimeAfterPrepTime} />

        <Typography sx={{ color: "#FF5F5F" }} fontSize="8px" lineHeight="10px">
          mins.
        </Typography>
      </Box>
      <Box></Box>
      <CustomAcceptedButton variant="contained" onClick={acceptHandler}>
        <Typography sx={{ color: "white", opacity: 0.98 }} fontSize="13px">
          {t("buttonContent.7")}
        </Typography>
      </CustomAcceptedButton>
      <DialogAlert
        open={open}
        newPrepTime={newPrepTime}
        onClose={acceptDialogCloseHandler}
        orderId={orderId}
        deliveryType={deliveryType}
        orderStatus={orderStatus}
        prepTime={prepTime}
      />
    </Box>
  );
};

export const OrderPendingFooter = ({
  orderId,
  deliveryType,
  orderStatus,
  prepTime,
}: FooterProps) => {
  const [newPrepTime, setNewPrepTime] = useState(10);
  const presetPreparationTimes = [5, 10, 30];
  const { t } = useTranslation("common");
  const setTimeHandler = (event: any, time: number) => {
    event.preventDefault();
    event.stopPropagation();
    setNewPrepTime(time);
  };
  const [open, setOpen] = useState(false);
  const acceptHandler = () => {
    setOpen(true);
  };

  const acceptDialogCloseHandler = () => {
    setOpen(false);
  };
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
      sx={{ marginTop: "15px" }}
      rowGap={2}
    >
      {presetPreparationTimes.map((time) => {
        return (
          <Box gridColumn="span 1" key={Math.random()}>
            <Button
              variant="contained"
              onClick={(event) => setTimeHandler(event, time)}
              type="submit"
              {...(time === newPrepTime
                ? {
                    sx: {
                      backgroundColor: "#F1F6ED",
                      color: "#74A047",
                      display: "flex",
                      flexDirection: "column",
                      width: "90%",
                      height: "54px",
                      borderRadius: "8px",

                      "&:focus": {
                        backgroundColor: "#F1F6ED",
                        color: "#74A047",
                      },
                      "&:active": {
                        backgroundColor: "#5D8139",
                        color: "white",
                      },
                      "&:hover": {
                        backgroundColor: "none",
                      },
                      "&.MuiButton-selected": {
                        backgroundColor: "#F1F6ED",
                        color: "#74A047",
                      },
                    },
                  }
                : {
                    sx: {
                      backgroundColor: "#F3F5F7",
                      color: "black",
                      display: "flex",
                      flexDirection: "column",
                      width: "90%",
                      height: "54px",
                      borderRadius: "8px",

                      "&:focus": {
                        backgroundColor: "#F1F6ED",
                        color: "#74A047",
                      },
                      "&:hover": {
                        backgroundColor: "none",
                      },
                      "&:active": {
                        backgroundColor: "#5D8139",
                        color: "white",
                      },
                      "&.MuiButton-selected": {
                        backgroundColor: "#F1F6ED",
                        color: "#74A047",
                      },
                    },
                  })}
            >
              <Typography
                fontSize="16px"
                lineHeight="21px"
                fontWeight={600}
                fontFamily="Dm-sans-bold"
              >
                {time}
              </Typography>
              <Typography fontSize="7px" lineHeight="9px" textTransform="none">
                min.
              </Typography>
            </Button>
          </Box>
        );
      })}

      <Box gridColumn="span 1">
        <IconButton
          sx={{
            width: "90%",
            height: "54px",
            backgroundColor: "#FDF4F3",
            borderRadius: "8px",
            border: "none",
            "&:active": {
              backgroundColor: "#FF2828",
              svg: {
                color: "white",
              },
            },
            "&:focus": {
              border: "none",
              "&:hover": {
                backgroundColor: "none",
              },
            },
          }}
          disableFocusRipple={true}
          disableTouchRipple={true}
        >
          <CloseIcon sx={{ color: "#FF5F5F" }} />
        </IconButton>
      </Box>

      <Box gridColumn="span 2">
        <Button
          {...(newPrepTime ? { variant: "contained" } : { disabled: true })}
          sx={{
            width: "calc(100% - 10px)",
            height: "54px",
            borderRadius: "8px",
            border: "none",
          }}
          onClick={acceptHandler}
        >
          {t("buttonContent.6")}
        </Button>
      </Box>
      <DialogAlert
        open={open}
        newPrepTime={newPrepTime}
        onClose={acceptDialogCloseHandler}
        orderId={orderId}
        deliveryType={deliveryType}
        orderStatus={orderStatus}
        prepTime={prepTime}
      />
    </Box>
  );
};

import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FooterProps, Props } from "../../../../shared/types/props.type";
import {
  CustomAcceptedButton,
  CustomReadyButton,
} from "../../../customcomponents";
import DialogAlert from "../../../dialog";

export const ReadyFooter = ({ orderStatus, orderId }: FooterProps) => {
  return (
    <CustomReadyButton variant="contained">
      <Typography sx={{ color: "white", opacity: 0.98 }} fontSize="13px">
        Completed
      </Typography>
    </CustomReadyButton>
  );
};

export const AcceptedFooter = ({
  orderStatus,
  orderId,
  prepTime,
  delivery_type,
  onOpen,
}: Props) => {
  console.log(prepTime);

  const { t } = useTranslation("common");
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
        <Typography sx={{ color: "#FF5F5F" }} fontSize="20px" lineHeight="26px">
          {prepTime}
        </Typography>
        <Typography sx={{ color: "#FF5F5F" }} fontSize="8px" lineHeight="10px">
          min.
        </Typography>
      </Box>
      <Box></Box>
      <CustomAcceptedButton variant="contained" onClick={onOpen}>
        <Typography sx={{ color: "white", opacity: 0.98 }} fontSize="13px">
          {t("buttonContent.7")}
        </Typography>
      </CustomAcceptedButton>
    </Box>
  );
};

export const PendingFooter = ({
  orderId,
  delivery_type,
  orderStatus,
  onOpen,
}: Props) => {
  const [prepTime, setPrepTime] = useState(10);
  const [open, setOpen] = useState(false);
  const presetPreparationTimes = [5, 10, 20];
  const { t } = useTranslation("common");
  const setTimeHandler = (event: any, time: number) => {
    event.preventDefault();
    event.stopPropagation();
    setPrepTime(time);
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
              {...(time === prepTime
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
          {...(prepTime ? { variant: "contained" } : { disabled: true })}
          sx={{
            width: "calc(100% - 10px)",
            height: "54px",
            borderRadius: "8px",
            border: "none",
          }}
          onClick={onOpen}
        >
          {t("buttonContent.6")}
        </Button>
      </Box>
    </Box>
  );
};

export default function OrderFooter({
  orderStatus,
  orderId,
  orderIndex,
  prepTime,
  delivery_type,
}: Props) {
  const [open, setOpen] = useState(false);
  const acceptHandler = () => {
    setOpen(true);
  };

  const acceptDialogCloseHandler = () => {
    setOpen(false);
  };
  let orderFooter = <></>;
  switch (orderStatus) {
    case 0:
      orderFooter = (
        <PendingFooter
          orderStatus={orderStatus}
          orderId={orderId}
          orderIndex={orderIndex}
          onOpen={acceptHandler}
        />
      );
      break;
    case 1:
      orderFooter = (
        <AcceptedFooter
          orderStatus={orderStatus}
          orderId={orderId}
          prepTime={prepTime}
          onOpen={acceptHandler}
        />
      );
      break;
    default:
      orderFooter = (
        <ReadyFooter
          orderStatus={orderStatus}
          orderId={orderId}
        />
      );
  }
  return (
    <>
      {orderFooter}
      <DialogAlert
        open={open}
        prepTime={prepTime}
        onClose={acceptDialogCloseHandler}
        orderId={orderId}
        delivery_type={delivery_type}
        status={orderStatus}
      />
    </>
  );
}

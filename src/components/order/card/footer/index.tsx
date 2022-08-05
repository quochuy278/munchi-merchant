import {styled} from "@mui/system";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const CustomPendingButton = styled(Button)(({ theme }) => ({
  width: "calc(100% - 10px)",
  height: "54px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: theme.palette.primary.main,
  "&:active": {
    backgroundColor: "#0d47a1",
  },
  "&:focus": {
    backgroundColor: "#1565c0",
    border: "none",
  },
  // "&:hover": {
  //   border: "none",
  // },
}));

const CustomAcceptedButton = styled(Button)(({ theme }) => ({
  textAlign: "center",
  backgroundColor: "#74A047",
  borderRadius: "8px",
  opacity: 1,
  flex: 1,
  height: "50px",
  "&:active": {
    backgroundColor: "#98BD73",
  },
  "&:focus": {
    backgroundColor: "#5D8139",
  },
  "&:hover": {
    backgroundColor: "#5D8139",
    border: "none",
  },
}));

const CustomReadyButton = styled(Button)(({ theme }) => ({
  textAlign: "center",
  marginTop: "15px",
  backgroundColor: "#513DEA",
  borderRadius: "8px",
  opacity: 1,
  width: "100%",
  height: "50px",
  "&:active": {
    backgroundColor: "#9487F3",
  },
  "&:focus": {
    backgroundColor: "#392BA4",
  },
  "&:hover": {
    backgroundColor: "#4937D3",
    border: "none",
  },
}));

type Props = {
  orderStatus: string;
  orderId: string;
};

export const ReadyFooter = ({ orderStatus, orderId }: Props) => {
  return (
    <CustomReadyButton variant="contained">
      <Typography sx={{ color: "white", opacity: 0.98 }} fontSize="13px">
        Completed
      </Typography>
    </CustomReadyButton>
  );
};

export const AcceptedFooter = ({ orderStatus, orderId }: Props) => {
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
          3
        </Typography>
        <Typography sx={{ color: "#FF5F5F" }} fontSize="8px" lineHeight="10px">
          min.
        </Typography>
      </Box>
      <Box></Box>
      <CustomAcceptedButton variant="contained">
        <Typography sx={{ color: "white", opacity: 0.98 }} fontSize="13px">
          Ready
        </Typography>
      </CustomAcceptedButton>
    </Box>
  );
};

export const PendingFooter = ({ orderStatus, orderId }: Props) => {
  const [prepTime, setPrepTime] = useState(0);
  const [selectedStyle, setSelectedStyle] = useState(false);
  const presetPreparationTimes = [5, 10, 20];
  const setTimeHandler = (event: any, time: number) => {
    event.preventDefault();
    event.stopPropagation();
    setPrepTime(time);
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
      sx={{ marginTop: "10px" }}
      rowGap={2}
      
    >
      {presetPreparationTimes.map((time) => {
        return (
          <Box gridColumn="span 1" key={Math.random()}>
            <Button
              sx={{
                color: "black",
                display: "flex",
                flexDirection: "column",
                width: "90%",
                height: "54px",
                borderRadius: "8px",
                backgroundColor: "#F3F5F7",
                "&:focus": {
                  backgroundColor: "#F1F6ED",
                  color: "#74A047",
                },
              }}
              variant="contained"
              onClick={(event) => setTimeHandler(event, time)}
              type="submit"
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

            {/* <Button
              variant="outlined"
              sx={{
                width: "90%",
                height: "54px",
                backgroundColor: "#F3F5F7",
                borderRadius: "8px",
                border: "none",
                "&:focus": {
                  border: "none",
                  backgroundColor: "##F1F6ED",
                },
              }}
              onClick={(event) => setTimeHandler(event, time)}
              type="submit"
              disableFocusRipple={true}
              disableTouchRipple={true}
              {...(prepTime == time
                ? { backgroundColor: "#F1F6ED" }
                : { backgroundColor: "#F3F5F7" })}
            >
              <Box display="flex" flexDirection="column" component={Button}>
                <Typography
                  fontSize="16px"
                  lineHeight="21px"
                  fontWeight={600}
                  {...(prepTime == time
                    ? { color: "#74A047" }
                    : { color: "#000000" })}
                >
                  {time}
                </Typography>
                <Typography
                  sx={{
                    color: "#000000",
                    "&:focus": {
                      color: "#red",
                    },
                  }}
                  fontSize="7px"
                  lineHeight="9px"
                  textTransform="none"
                >
                  min.
                </Typography>
              </Box>
            </Button> */}
          </Box>
        );
      })}

      <Box gridColumn="span 1">
        <Button
          variant="outlined"
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
            },
          }}
          disableFocusRipple={true}
          disableTouchRipple={true}
        >
          <Box display="flex" flexDirection="column">
            <CloseIcon sx={{ color: "#FF5F5F" }} />
          </Box>
        </Button>
      </Box>

      <Box gridColumn="span 2">
        <CustomPendingButton
          {...(prepTime ? { variant: "contained" } : { disabled: true })}
          // href={`/detail/${orderId}`}
        >
          Accept
        </CustomPendingButton>
      </Box>
    </Box>
  );
};

export default function OrderFooter({ orderStatus, orderId }: Props) {
  let orderFooter = <></>;
  if (orderStatus === "pending") {
    orderFooter = <PendingFooter orderStatus={orderStatus} orderId={orderId} />;
  } else if (orderStatus === "accepted") {
    orderFooter = (
      <AcceptedFooter orderStatus={orderStatus} orderId={orderId} />
    );
  } else {
    orderFooter = <ReadyFooter orderStatus={orderStatus} orderId={orderId} />;
  }
  return orderFooter;
}

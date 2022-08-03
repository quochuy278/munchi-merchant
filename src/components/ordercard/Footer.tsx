import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

import CloseIcon from "@mui/icons-material/Close";
import { SyntheticEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
const CustomPendingButton = styled(Button)(({ theme }) => ({
  width: "calc(100% -10px)",
  height: "54px",
  borderRadius: "8px",
  border: "none",
}));

export const ReadyButtonFooter = () => {
  return (
    <Button
      variant="contained"
      sx={{
        textAlign: "center",

        marginTop: "15px",
        backgroundColor: "#513DEA",
        borderRadius: "8px",
        opacity: 1,
        width: "100%",
        height: "50px",
      }}
    >
      <Typography sx={{ color: "white", opacity: 0.98 }} fontSize="13px">
        Completed
      </Typography>
    </Button>
  );
};

export const AcceptedButtonFooter = () => {
   const orders = useSelector((state: RootState) => state.order.orders);
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ marginTop: "15px" }}
    >
      <Box
        sx={{
          width: "50px",
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
      <Button
        variant="contained"
        sx={{
          textAlign: "center",
          backgroundColor: "#74A047",
          borderRadius: "8px",
          opacity: 1,
          flex: 1,
          height: "50px",
        }}
      >
        <Typography sx={{ color: "white", opacity: 0.98 }} fontSize="13px">
          Ready
        </Typography>
      </Button>
    </Box>
  );
};

export const PendingButtonFooter = ({props} : any) => {
  const [prepTime, setPrepTime] = useState(0);
  const [selectedStyle, setSelectedStyle] = useState(false)
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
              variant="outlined"
              sx={{
                width: "78px",
                height: "54px",
                backgroundColor: "#F3F5F7",
                borderRadius: "8px",
                border: "none",
                "&:focus": {
                  backgroundColor: "#F1F6ED",
                  "&:focus ,&.MuiTypography-root": {
                    color: "#74A047",
                  },
                },
                "&:hover": {
                  border: "none",
                  backgroundColor: "none",
                },
              }}
              onClick={(event) => setTimeHandler(event, time)}
              type="submit"
              disableFocusRipple={true}
              disableTouchRipple={true}
            >
              <Box display="flex" flexDirection="column">
                <Typography
                sx={{color: "#000000"}}
                  fontSize="16px"
                  lineHeight="21px"
                  fontWeight={600}
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
            </Button>
          </Box>
        );
      })}

      <Box gridColumn="span 1">
        <Button
          variant="outlined"
          sx={{
            width: "78px",
            height: "54px",
            backgroundColor: "#FDF4F3",
            borderRadius: "8px",
            border: "none",
            "&:focus": {
              backgroundColor: "red",
              svg: {
                color: "black",
              },
            },
            "&:hover": {
              border: "none",
              backgroundColor: "#FDF4F3",
            },
          }}
          disableRipple={true}
        >
          <Box display="flex" flexDirection="column">
            <CloseIcon sx={{ color: "#FF5F5F" }} />
          </Box>
        </Button>
      </Box>

      <Box gridColumn="span 2">
        <CustomPendingButton
          {...(prepTime ? { variant: "contained" } : { disabled: true })}
          style={{ width: `calc(100% - 10px` }}
          href="/detail"
        >
          Accept
        </CustomPendingButton>
      </Box>
    </Box>
  );
};

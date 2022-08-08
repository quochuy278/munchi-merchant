import { Box, Button, Input, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Props } from "../../../../shared/types/props.type";
import styles from "./index.module.css";

const timeAvailable = [1, 5, 10, 15, 20, 30];
const InfoReadyFooter = ({ status }: Props) => {
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
            Created
          </Typography>
          <Typography fontSize="10px" lineHeight="13px">
            15:41
          </Typography>
        </Box>
        <Box sx={{ marginY: "20px" }}>
          <Typography fontSize="10px" lineHeight="13px" fontWeight={500}>
            Accepted
          </Typography>
          <Typography fontSize="10px" lineHeight="13px">
            15:41
          </Typography>
        </Box>
        <Box sx={{ marginY: "20px" }}>
          <Typography fontSize="10px" lineHeight="13px" fontWeight={500}>
            Marked ready
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
            Ready in
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
          >
            <Typography fontSize="12px" lineHeight="16px" textTransform="none">
              Ready to pick up
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const InfoPendingFooter = ({ status, timeStamp }: Props) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [prepTime, setPrepTime] = useState(10);
  const [open, setOpen] = useState(false);
  const InputVisibleHandler = () => {
    setInputVisible(true);
    
  };
  const setTimeHandler = (event: any, time: number) => {
    event.preventDefault();
    event.stopPropagation();
    if (time) setPrepTime(time);
    else setPrepTime(event.target.value);
  };

  return (
    <>
      <Box className={styles.detail__time__info}>
        <Typography fontSize="10px" lineHeight="13px" fontWeight={500}>
          Created {timeStamp}
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
            Ready in
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
              setPrepTime(e.target.value);
            }}
          />
        </Box>
        {timeAvailable.map((time, index) => {
          return (
            <Box gridColumn="span 1" id={`${index}`}>
              <Button
                variant="contained"
                className={styles.time__btn}
                {...(time === prepTime
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
            }}
            onClick={InputVisibleHandler}
          >
            <Typography>Custom</Typography>
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
            }}
            disableFocusRipple={true}
            disableTouchRipple={true}
          >
            <Typography>Decline</Typography>
          </Button>
        </Box>
        <Box gridColumn="span 2">
          <Button
            {...(prepTime ? { variant: "contained" } : { disabled: true })}
            variant="contained"
            className={styles.time__btn}
            sx={{
              backgroundColor: "#F3F5F7",
              color: "black",
              width: "100%",
              borderRadius: "8px",
              boxShadow: "none",
            }}
          >
            <Typography>Accept</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default function InfoFooter({ timeStamp, status }: Props) {
  switch (status) {
    case "pending":
      return (
        <Box className={styles.detail_footer_container}>
          <InfoPendingFooter timeStamp={timeStamp} />
        </Box>
      );
    case "accepted":
      return (
        <Box className={styles.detail_footer_container}>
          <InfoReadyFooter timeStamp={timeStamp} />
        </Box>
      );
    default:
      return (
        <Box className={styles.detail_footer_container}>
          <InfoPendingFooter timeStamp={timeStamp} />
        </Box>
      );
  }
}

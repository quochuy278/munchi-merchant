import { Button, IconButton, IconButtonProps, Slide } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import { TransitionProps } from "@mui/material/transitions";
import { Box } from "@mui/system";
import React from "react";

// order footer buttons
export const CustomReadyButton = styled(Button)(({ theme }) => ({
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

export const CustomAcceptedButton = styled(Button)(({ theme }) => ({
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

// dialog buttons
export const CustomDeclineButton = styled(Button)(({ theme }) => ({
  width: "50%",
  height: "54px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#FF5F5F",
  boxShadow: "none",
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

export const CustomAcceptButton = styled(Button)(({ theme }) => ({
  width: "50%",
  height: "54px",
  borderRadius: "8px",
  border: "none",
  boxShadow: "none",
  //   "&:active": {
  //     backgroundColor: "#98BD73",
  //   },
  //   "&:focus": {
  //     backgroundColor: "#5D8139",
  //   },
  //   "&:hover": {
  //     backgroundColor: "#5D8139",
  //     border: "none",
  //   },
}));

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export const LoadingSpinner = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress color="error"/>
    </Box>
  );
};

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import React from "react";
import { TransitionProps } from "@mui/material/transitions";
import styles from "./index.module.css";
import { CustomAcceptButton, CustomDeclineButton } from "../customcomponents";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

type Props = {
  children?: JSX.Element | JSX.Element[];
  open: boolean;
  prepTime: any;
  onClose: () => void;
 
};

export default function DialogAlert({ open, prepTime, onClose }: Props) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Order confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Please confirm that you will give the order in {prepTime} minutes
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <CustomDeclineButton variant="contained" onClick={onClose}>
          Go Back
        </CustomDeclineButton>
        <CustomAcceptButton onClick={onClose} variant="contained">
          Confirm
        </CustomAcceptButton>
      </DialogActions>
    </Dialog>
  );
}

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
import { CustomAcceptButton, CustomDeclineButton } from "../customcomponents/mui";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { updateState } from "../../store/order-slice";
import { useTranslation } from "react-i18next";
import { DialogProps } from "../../shared/interfaces/props.interface";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});



export default function DialogAlert({
  open,
  prepTime,
  onClose,
  orderId,
  deliveryType,
  orderStatus,
  newPrepTime,
}: DialogProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation("common");
  // const clickHandler = () => {
  //   dispatch(updateState(orderId));
  // }
  let DialogRenderContent = <></>;
  if (deliveryType === 1 && orderStatus === 1) {
    return (DialogRenderContent = (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{t("section.dialog.dialogTitle")}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {t("dialogContent.0")}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <CustomDeclineButton variant="contained" onClick={onClose}>
            Go Back
          </CustomDeclineButton>
          <CustomAcceptButton
            onClick={() => dispatch(updateState({ orderId, newPrepTime }))}
            variant="contained"
          >
            Confirm
          </CustomAcceptButton>
        </DialogActions>
      </Dialog>
    ));
  } else if (orderStatus == 0) {
    return (DialogRenderContent = (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Order confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Please confirm that you will give the order in {newPrepTime} minutes
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <CustomDeclineButton variant="contained" onClick={onClose}>
            Go Back
          </CustomDeclineButton>
          <CustomAcceptButton
            onClick={() => dispatch(updateState({ orderId, newPrepTime }))}
            variant="contained"
          >
            Confirm
          </CustomAcceptButton>
        </DialogActions>
      </Dialog>
    ));
  }
  return <>{DialogRenderContent}</>;
}

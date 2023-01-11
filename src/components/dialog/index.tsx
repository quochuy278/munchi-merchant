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
import {
  CustomAcceptButton,
  CustomDeclineButton,
} from "../customcomponents";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { updateState } from "../../store/order-slice";
import { useTranslation } from "react-i18next";
import { DialogProps } from "../../shared/interfaces/props.interface";
import {OrderEnum} from "../../shared/enum/enum";
import { FactoryDialogContent } from "../factory";

export default function DialogAlert({
  open,
  onClose,
  orderId,
  deliveryType,
  orderStatus,
  newPrepTime,  
}: DialogProps) {
  return (
    <FactoryDialogContent
      open={open}
      onClose={onClose}
      orderId={orderId}
      deliveryType={deliveryType}
      orderStatus={orderStatus}
      newPrepTime={newPrepTime}
    />
  );
}

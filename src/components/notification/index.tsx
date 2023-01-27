import { Alert } from "@mui/material";
import { NotificationProps } from "../../shared/interfaces/props.interface";

const Notification= ( props: NotificationProps) => {
  return (
    <>
      <Alert severity="error">{props.message}</Alert>
    </>
  );
}

export default Notification;
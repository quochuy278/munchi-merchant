import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import OrderEnum from "../../../shared/enum/enum";
import {
  FactoryIcon,
  FactoryProps,

  FactoryTimeFormatProps,
} from "../../../shared/interfaces/props.interface";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import DiningIcon from "@mui/icons-material/Dining";
import TakeoutDiningOutlinedIcon from "@mui/icons-material/TakeoutDiningOutlined";

export const FactoryButton = ({ deliveryType }: FactoryProps) => {
  const deliveryReadyHandler = () => {};
  const pickupReadyHandler = () => {};
  const readyReadyHandler = () => {};
  const { t } = useTranslation("common");
  switch (deliveryType) {
    case OrderEnum.DELIVERY:
      return (
        // delivery
        <>
          <Typography fontSize="12px" lineHeight="16px" textTransform="none">
            {t("buttonContent.1")}
          </Typography>
        </>
      );
    case OrderEnum.PICKUP:
      return (
        // pickup
        <>
          <Typography fontSize="12px" lineHeight="16px" textTransform="none">
            {t("buttonContent.2")}
          </Typography>
        </>
      );
    case OrderEnum.EATIN:
      return (
        // eatin
        <>
          <Typography fontSize="12px" lineHeight="16px" textTransform="none">
            {t("buttonContent.3")}
          </Typography>
        </>
      );
    default:
      return (
        <>
          <Typography fontSize="12px" lineHeight="16px" textTransform="none">
            {t("buttonContent.3")}
          </Typography>
        </>
      );
  }
};

export const FactoryIconInfo = ({ orderType }: FactoryIcon) => {
  const { t } = useTranslation("common");
  switch (orderType) {
    case OrderEnum.PICKUP:
      return (
        <Box display="flex">
          <DiningIcon sx={{ width: "16px", height: "14px", marginX: 1 }} />
          <Typography fontSize="10px" lineHeight="13px">
            {t("delivery_type.2")}
          </Typography>
        </Box>
      );
    case OrderEnum.DELIVERY:
      return (
        <Box display="flex">
          <DeliveryDiningIcon
            sx={{ width: "16px", height: "14px", marginX: 1 }}
          />
          <Typography fontSize="10px" lineHeight="13px">
            {t("delivery_type.1")}
          </Typography>
        </Box>
      );
    case OrderEnum.EATIN:
      return (
        <Box display="flex">
          <TakeoutDiningOutlinedIcon
            sx={{ width: "16px", height: "14px", marginX: 1 }}
          />
          <Typography fontSize="10px" lineHeight="13px">
            {t("delivery_type.3")}
          </Typography>
        </Box>
      );
    case null:
      return null;
    default:
      return (
        <Box display="flex">
          <TakeoutDiningOutlinedIcon
            sx={{ width: "16px", height: "14px", marginX: 1 }}
          />
          <Typography fontSize="10px" lineHeight="13px">
            {t("delivery_type.0")}
          </Typography>
        </Box>
      );
  }
};

export const FactoryTimeFormat = ({ minutes,seconds }: FactoryTimeFormatProps) => {
  const { t } = useTranslation("common");
  switch (minutes | seconds) {
    case seconds:
      return (
        <Box display="flex">
          <DiningIcon sx={{ width: "16px", height: "14px", marginX: 1 }} />
          <Typography fontSize="10px" lineHeight="13px">
            {t("delivery_type.2")}
          </Typography>
        </Box>
      );
    case OrderEnum.DELIVERY:
      return (
        <Box display="flex">
          <DeliveryDiningIcon
            sx={{ width: "16px", height: "14px", marginX: 1 }}
          />
          <Typography fontSize="10px" lineHeight="13px">
            {t("delivery_type.1")}
          </Typography>
        </Box>
      );
    case OrderEnum.EATIN:
      return (
        <Box display="flex">
          <TakeoutDiningOutlinedIcon
            sx={{ width: "16px", height: "14px", marginX: 1 }}
          />
          <Typography fontSize="10px" lineHeight="13px">
            {t("delivery_type.3")}
          </Typography>
        </Box>
      );
    case null:
      return null;
    default:
      return (
        <Box display="flex">
          <TakeoutDiningOutlinedIcon
            sx={{ width: "16px", height: "14px", marginX: 1 }}
          />
          <Typography fontSize="10px" lineHeight="13px">
            {t("delivery_type.0")}
          </Typography>
        </Box>
      );
  }
};

import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import DiningIcon from "@mui/icons-material/Dining";
import TakeoutDiningOutlinedIcon from "@mui/icons-material/TakeoutDiningOutlined";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTranslation } from "react-i18next";
import {DeliveryEnum, OrderEnum} from "../../../../shared/enum/enum";
import { DetailInfoListProps } from "../../../../shared/interfaces/props.interface";
import styles from "./index.module.css";

export type FactoryType = {
  deliveryType: number;
};

const FactoryIcon = ({ deliveryType }: FactoryType): JSX.Element => {
  const { t } = useTranslation("common");
  switch (deliveryType) {
    case DeliveryEnum.DELIVERY: {
      return (
        <Box className={styles.detail__icon__container}>
          <DeliveryDiningIcon sx={{ color: "#707070" }} />
          <Typography fontSize="8px" lineHeight="10px">
            {t("delivery_type.1")}
          </Typography>
        </Box>
      );
    }
    case DeliveryEnum.EATIN: {
      return (
        <Box className={styles.detail__icon__container}>
          <DiningIcon sx={{ color: "#707070" }} />
          <Typography fontSize="8px" lineHeight="10px">
            {t("delivery_type.3")}
          </Typography>
        </Box>
      );
    }
    case DeliveryEnum.PICK_UP: {
      return (
        <Box className={styles.detail__icon__container}>
          <TakeoutDiningOutlinedIcon sx={{ color: "#707070" }} />
          <Typography fontSize="8px" lineHeight="10px">
            {t("delivery_type.2")}
          </Typography>
        </Box>
      );
    }
    case undefined: {
      return <div>{null}</div>;
    }
    default: {
      return (
        <Box className={styles.detail__icon__container}>
          <TakeoutDiningOutlinedIcon sx={{ color: "#707070" }} />
          <Typography fontSize="8px" lineHeight="10px">
            {t("delivery_type.0")}
          </Typography>
        </Box>
      );
    }
  }
};

export default function InfoList({ name, deliveryType }: DetailInfoListProps) {
  const { t } = useTranslation("common");
  return (
    <Box className={styles.detail__info}>
      <Box className={styles.detail__info__bar}>
        <Box sx={{ marginX: "10px" }}>
          <Typography fontSize="10px" lineHeight="13px">
            {t("customer")}
          </Typography>
          <Typography fontSize="18px" lineHeight="24px">
            {name}
          </Typography>
        </Box>
        {/* <IconButton
          sx={{
            marginX: "10px",
            backgroundColor: "#F2F9FE",
            borderRadius: "8px",
            width: "40px",
          }}
        >
          <PhoneOutlinedIcon
            sx={{ width: "14px", height: "14px" }}
            color="primary"
          />
        </IconButton>
        <IconButton
          sx={{
            marginX: "10px",
            backgroundColor: "#F2F9FE",
            borderRadius: "8px",
            width: "40px",
          }}
        >
          <ChatBubbleOutlineOutlinedIcon
            sx={{ width: "14px", height: "14px" }}
            color="primary"
          />
        </IconButton> */}
      </Box>

      <Box sx={{ padding: "20px" }}>
        <FactoryIcon deliveryType={deliveryType} />
      </Box>
    </Box>
  );
}

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "./index.module.css";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import DiningIcon from "@mui/icons-material/Dining";
import TakeoutDiningOutlinedIcon from "@mui/icons-material/TakeoutDiningOutlined";
import { Props } from "../../../../shared/types/props.type";



export default function InfoList({ name }: Props) {
  return (
    <Box className={styles.detail__info}>
      <Box className={styles.detail__info__bar}>
        <Box sx={{ marginX: "10px" }}>
          <Typography fontSize="10px" lineHeight="13px">
            Customer
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
        <Box className={styles.detail__icon__container}>
          <TakeoutDiningOutlinedIcon sx={{ color: "#707070" }} />
          <Typography fontSize="8px" lineHeight="10px">
            Take away
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

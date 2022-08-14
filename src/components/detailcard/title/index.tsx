import { Box, IconButton, Link, Typography } from "@mui/material";
import { Props } from "../../../shared/types/props.type";
import styles from "./index.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
export default function DetailTitle({ orderId }: Props) {
  const {t} = useTranslation('common')
  return (
    <Box className={styles.title__container}>
      <Box>
        {" "}
        <Typography fontSize="30px" lineHeight="39px" textAlign="left">
          {t("section.detail.detailTitle")} # {orderId}
        </Typography>
      </Box>
      <Box>
        <Link href="/">
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
}

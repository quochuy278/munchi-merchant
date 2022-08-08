import { Box, Typography } from "@mui/material";
import { Props } from "../../../shared/types/props.type";
import styles from './index.module.css';



export default function DetailTitle({ orderId }: Props) {
  return (
    <Box className={styles.title__container}>
      <Typography fontSize="30px" lineHeight="39px" textAlign="left">Order #{orderId}</Typography>
    </Box>
  );
}

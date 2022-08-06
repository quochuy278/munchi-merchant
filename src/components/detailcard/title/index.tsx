import { Box, Typography } from "@mui/material";
import styles from './index.module.css';

type Props = {
    orderId: string
}

export default function DetailTitle({ orderId }: Props) {
  return (
    <Box className={styles.title__container}>
      <Typography fontSize="30px" lineHeight="39px" textAlign="left">Order #{orderId}</Typography>
    </Box>
  );
}

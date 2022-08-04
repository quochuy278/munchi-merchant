import { Box, Typography } from "@mui/material";
import React from "react";
type Props = {
    orderId: string
}

export default function DetailTitle({ orderId }: Props) {
  return (
    <Box>
      <Typography>Order {orderId}</Typography>
    </Box>
  );
}

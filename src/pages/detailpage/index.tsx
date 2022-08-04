import { Box } from "@mui/material";
import React from "react";
import DetailContent from "../../components/container/DetailContent";
import MainContent from "../../components/container/MainContent";
import DetailTitle from "../../components/detail/title";

import styles from "./index.module.css";

export default function DetailPage() {
  return (
    <DetailContent>
      <DetailTitle orderId="42244" />
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={2}
        sx={{ marginTop: "10px" }}
        className={styles.detail__container}
      >
        <Box gridColumn="span 6" className={styles.detail__content}>
          <div>xs=8</div>
        </Box>
        <Box gridColumn="span 6" className={styles.detail__content}>
          <div>xs=4</div>
        </Box>
      </Box>
    </DetailContent>
  );
}



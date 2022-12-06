import styles from "./index.module.css";

import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { OrderTitleProps } from "../../../shared/interfaces/props.interface";



const CustomeTypography = styled(Typography)(({ theme }) => ({
  color: "black",
  fontSize: "16px",
  fontWeight: 600,
}));

const CustomeBox = styled(Box)(({ theme }) => ({
  height: "26px",
  width: "26px",
  backgroundColor: "white",
  textAlign: "center",
  marginLeft: "10px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function OrderTitle({ orderTitle, orderQuantity }: OrderTitleProps) {
  return (
    <Box gridColumn="span 2" className={styles.section__title} display="flex">
      <CustomeTypography variant="h5">{orderTitle}</CustomeTypography>
      <CustomeBox>
        <Typography fontSize="12px">{orderQuantity}</Typography>
      </CustomeBox>
    </Box>
  );
}

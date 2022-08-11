import { Divider, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styles from "./index.module.css";
import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";
import { Item } from "../../../store/OrderSlice";
import ItemList from "./itemlist";
import ItemFooter from "./itemfooter";
import { Props } from "../../../shared/types/props.type";
import { useTranslation } from "react-i18next";


export default function ItemCard({ detailOrder }: Props) {
  const {t} = useTranslation('common')
  const { products, comments } = detailOrder;
  return (
    <Box gridColumn="span 6" className={styles.detail__content}>
      <Box className={styles.detail__card}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          className={styles.detail__title}
        >
          <Typography fontSize="18px" lineHeight="24px" fontWeight={600}>
            {products.length} {t('Items')}
          </Typography>
          <IconButton sx={{ backgroundColor: "#F2F9FE", borderRadius: "8px" }}>
            <PrintIcon
              sx={{ marginRight: "10px", width: "14px", height: "14px" }}
              color="primary"
            />
            <Typography fontSize="12px" lineHeight="16px">
              Print
            </Typography>
          </IconButton>
        </Box>
        <Divider sx={{ width: "100%", marginTop: "10px" }} />
        <ItemList items={products} />
        <Box sx={{ width: "90%" }}>
          <Box
            sx={{
              backgroundColor: "#F3F5F7",
              width: "fit-content",
              height: "fit-content",
              padding: "8px",
              borderRadius: "8px",
            }}
          >
            <Typography
              fontSize="12px"
              lineHeight="16px"
              fontFamily="DM-sans"
              fontWeight={600}
            >
              {comments}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={styles.payment_container}>
        <Divider sx={{ width: "100%", marginBottom: "20px" }} />
        <ItemFooter />
      </Box>
    </Box>
  );
}

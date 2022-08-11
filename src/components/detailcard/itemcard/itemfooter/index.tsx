import { Box, IconButton, Typography } from '@mui/material';
import React from 'react'
import styles from './index.module.css'
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from 'react-i18next';
export default function ItemFooter() {
  const {t} = useTranslation('common')
  return (
    <Box className={styles.payment_content}>
      {/* <Box>
        <IconButton
          sx={{
            backgroundColor: "#FDF4F3",
            borderRadius: "8px",
            width: "102px",
          }}
        >
          <CloseIcon
            sx={{
              color: "#FF5F5F",
              width: "12px",
              height: "12px",
              marginRight: "10px",
            }}
          />
          <Typography
            fontSize="12px"
            lineHeight="16px"
            sx={{ color: "#FF5F5F" }}
            fontWeight={600}
          >
            Reject
          </Typography>
        </IconButton>
      </Box> */}
      <Box sx={{ width: "100%" }}>
        <Box className={styles.payment_title}>
          <Box>
            <Typography
              fontSize="12px"
              lineHeight="16px"
              sx={{ color: "#51545E" }}
            >
              {t("tax")}
            </Typography>
          </Box>
          <Box>
            <Typography
              fontSize="12px"
              lineHeight="16px"
              sx={{ color: "#51545E" }}
            >
              3.8 €
            </Typography>
          </Box>
        </Box>
        <Box className={styles.payment_title}>
          <Box display="flex" alignItems="flex-end">
            <Typography
              fontSize="12px"
              lineHeight="16px"
              sx={{ color: "#000000" }}
            >
              {t("total")}
            </Typography>
          </Box>
          <Box>
            <Typography
              fontSize="30px"
              lineHeight="39px"
              sx={{ color: "#000000" }}
            >
              25.90 €
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

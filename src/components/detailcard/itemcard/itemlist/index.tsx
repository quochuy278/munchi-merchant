import CloseIcon from "@mui/icons-material/Close";
import { Box, Divider, Typography } from '@mui/material';
import { Item } from '../../../../store/OrderSlice';
import styles from './index.module.css';
type Props = {
    items: []
}

export default function ItemList( {items}: Props) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%" sx={{overflowX:"hidden", overflowY:"scroll"}}>
      {items.map((item: Item, index) => {
        return (
          <Box className={styles.detail__item} key={index}>
            <Box display="flex" justifyContent="space-between" width="100%">
              <Box display="flex" alignItems="center">
                <Typography>{item.quantity}</Typography>
                <CloseIcon
                  sx={{
                    color: "#000000",
                    width: "10px",
                    height: "10px",
                    marginX: "20px",
                  }}
                />
                <Box>
                  <Typography fontSize="12px" lineHeight="16px">
                    {item.name}
                  </Typography>
                  <Typography
                    fontSize="12px"
                    lineHeight="16px"
                    sx={{ color: "#51545E" }}
                  >
                    Add ons: 1x chipotle sauce
                  </Typography>
                </Box>
              </Box>
              <Box textAlign="right">
                <Typography fontSize="12px" lineHeight="16px">
                  12.10 €
                </Typography>
                <Typography
                  fontSize="12px"
                  lineHeight="16px"
                  sx={{ color: "#51545E" }}
                >
                  + 2.20 €
                </Typography>
              </Box>
            </Box>
            <Box width="120%">
              <Divider sx={{ width: "100%", marginTop: "10px" }} />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

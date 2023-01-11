import styles from "./index.module.css";
import BusinessItem from "../item";
import { RootObject } from "../../../shared/interfaces/business.interface";
import { Box, Typography } from "@mui/material";

const BusinessList = () => {
  return (
    <Box className={styles.business__list}>
      <Typography variant="h5" sx={{marginBottom:"50px"}}>
        Select your business
      </Typography>
      <BusinessItem />
    </Box>
  );
};

export default BusinessList;

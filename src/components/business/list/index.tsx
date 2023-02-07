import styles from "./index.module.css";
import BusinessItem from "../item";
import { RootObject } from "../../../shared/interfaces/business.interface";
import { Box, Typography } from "@mui/material";

const BusinessList = ({data}) => {
  return (
    <Box className={styles.business__list}>
      <Typography variant="h5" sx={{marginBottom:"50px"}}>
        Select your business
      </Typography>
      <BusinessItem data={data}/>
    </Box>
  );
};

export default BusinessList;

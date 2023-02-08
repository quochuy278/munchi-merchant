import styles from "./index.module.css";
import BusinessItem from "../item";
import { RootObject } from "../../../shared/interfaces/business.interface";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { setBusiness } from "../../../store/business-slice";

const BusinessList = ({ data }) => {
  // const dispatch = useDispatch<AppDispatch>();
  // const [business, setBusiness] = useState("");
  // console.log(business);
 
  return (
    <Box className={styles.business__list}>
      {data.map((business: any) => {
        return (
          <Box
            className={styles.business__item}
          >
            <BusinessItem data={business} />
          </Box>
        );
      })}
    </Box>
  );
};

export default BusinessList;

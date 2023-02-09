import { Box } from "@mui/material";
import BusinessItem from "../item";
import styles from "./index.module.css";

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
            key={business.publicId}
          >
            <BusinessItem data={business} />
          </Box>
        );
      })}
    </Box>
  );
};

export default BusinessList;

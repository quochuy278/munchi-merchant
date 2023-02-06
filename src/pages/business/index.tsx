import { Box } from "@mui/system";
import BusinessList from "../../components/business/list";
import MainContent from "../../components/container/MainContent";
import { useGetBusinessByNameQuery } from "../../store/api-slice";
import styles from "./index.module.css";


const BusinessPage = () => {
  const {data,isError,isLoading,currentData} = useGetBusinessByNameQuery('allbusiness')
 
  console.log(data)
  return (
    <Box className={styles.container}>
      <BusinessList/>
    </Box>
  );
};

export default BusinessPage;

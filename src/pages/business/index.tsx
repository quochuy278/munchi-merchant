import { Box } from "@mui/system";
import BusinessList from "../../components/business/list";
import MainContent from "../../components/container/MainContent";
import { useGetBusinessByNameQuery } from "../../store/api-slice";
import styles from "./index.module.css";


const BusinessPage = () => {
  const userPublicId = "5371f7d6-455a-41ca-93ac-6cf47e05acbb"
  const {data,isError,isLoading,currentData} = useGetBusinessByNameQuery(userPublicId)
  console.log(data)
  return (
    <Box className={styles.container}>
      <BusinessList data={data}/>
    </Box>
  );
};

export default BusinessPage;

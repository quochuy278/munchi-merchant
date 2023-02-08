import { Preferences } from "@capacitor/preferences";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BusinessList from "../../components/business/list";
import MainContent from "../../components/container/MainContent";
import { LoadingSpinner } from "../../components/customcomponents";
import { AppDispatch, RootState } from "../../store";
import { setAuthenticated } from "../../store/auth-slice";
import { useGetBusinessByNameQuery } from "../../store/services-slice";
import styles from "./index.module.css";

const BusinessPage = () => {
  useEffect(() => {
    const getToken = async () => {
      const { value } = await Preferences.get({ key: "verifyToken" });
      if (value) navigate("/business", { replace: true });
    };
    try {
      getToken();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isAuthenticated, userInfo } = useSelector(
    (state: RootState) => state.auth
  );
  console.log(userInfo);
  const { data, isError, isLoading, currentData } = useGetBusinessByNameQuery(
    userInfo[0].publicId
  );

  console.log(data);
  // console.log("🚀 ~ file: index.tsx:17 ~ BusinessPage ~ userInfo", userInfo);
  // console.log(
  //   "🚀 ~ file: index.tsx:17 ~ BusinessPage ~ isAuthenticated",
  //   isAuthenticated
  // );
  if (isLoading) return <LoadingSpinner />;
  return (
    <Box className={styles.container}>
      <Box className={styles.business__title}>
        <Typography variant="h4"> Select your business</Typography>
      </Box>
      <Box className={styles.business__list}>
        <BusinessList data={data} />
      </Box>
    </Box>
  );
};

export default BusinessPage;

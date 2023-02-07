import { useSelector } from "react-redux";
import { Props } from "../../shared/interfaces/props.interface";
import { RootState } from "../../store";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./layout.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default  function Layout({ children }: Props) {
  const navigate = useNavigate();
  // const isAuthenticated = useSelector(
  //   (state: RootState) => state.auth.isAuthenticated
  // );
  // console.log(isAuthenticated);
  // useEffect(() => {
  //   if (!isAuthenticated) return navigate("/login");
  // }, [isAuthenticated]);

  return (
    <div className={styles.app__container}>
      {/* {isAuthenticated() ? <Header /> : null} */}
      <main>{children}</main>
      <Footer />
    </div>
  );
}

import { Props } from "../../shared/types/props.type";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./layout.module.css";

export default function Layout({ children }: Props) {
  // const isAuthenticated = useSelector(
  //   (state: RootState) => state.auth.isAuthenticated
  // );
  return (
    <div className={styles.app__container}>
      {/* {isAuthenticated ? <Header /> : null} */}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

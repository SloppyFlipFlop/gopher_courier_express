import Navbar from "./Navbar";
import Footer from "./Footer";
import HeadTags from "./HeadTags";

import styles from "./../styles/components/Layout.module.scss";

const Layout = ({ title, children }) => {
  return (
    <div className={styles.page_container}>
      <HeadTags />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

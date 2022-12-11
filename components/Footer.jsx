import styles from "./../styles/components/Footer.module.scss";

import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <h1 className={styles.title}>Gopher Courier Express</h1>
      <div className={styles.copyright}>
        <div className={styles.companyName}>Gopher Courier Express</div>
      </div>
    </footer>
  );
};

export default Footer;

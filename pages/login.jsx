import styles from "./../styles/pages/Login.module.scss";
import Banner from "../components/Banner";

// images

export default function Login() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Customer Login</h1>
      <p>
        Log in below to track all of your Gopher Courier Express package
        deliveries.
      </p>

      <iframe
        className={styles.login_container}
        src="https://04870.cxtsoftware.net/#/home"
        title="Login"
      ></iframe>
    </div>
  );
}

import styles from "./../styles/components/Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.page_container}>
      <div id={styles.parcel}>📦</div>
    </div>
  );
};

export default Loading;

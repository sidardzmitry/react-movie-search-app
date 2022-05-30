import styles from "./Text.module.css";

const Text = () => {
  return (
    <div className={styles["box-text"]}>
      <h1 className={styles.text}>Enter movie name, please</h1>
      <h1 className={styles.text}>Nothing found</h1>
    </div>
  );
};

export default Text;
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles["header-title"]}>Movie Search App</h1>
      <div className={styles["header-navbar"]}>
        <span className={`${styles.menu} ${styles["menu-home"]}`}>Home</span>
        <span className={`${styles.menu} ${styles["menu-about"]}`}>About</span>
        <span className={`${styles.menu} ${styles["menu-contact"]}`}>
          Contact
        </span>
      </div>
    </header>
  );
};

export default Header;

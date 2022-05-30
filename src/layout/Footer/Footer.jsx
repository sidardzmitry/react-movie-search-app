import styles from "./Footer.module.css";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-company"]}>
        <h5 className={styles["footer-title"]}>
          @ {new Date().getFullYear()} Movies App
        </h5>
        <span className={styles["footer-text"]}>Author: 'Dmitriy S'</span>
      </div>

      <div className={styles["footer-icons"]}>
        <span>Follow us on</span>
        <div className={styles.icons}>
          <a href="https://ru-ru.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebookSquare className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <FaTwitterSquare className={styles.icon} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagramSquare className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles["footer-navbar"]}>
        <span className={`${styles.menu} ${styles["menu-home"]}`}>Home</span>
        <span className={`${styles.menu} ${styles["menu-about"]}`}>About</span>
        <span className={`${styles.menu} ${styles["menu-contact"]}`}>
          Contact
        </span>
      </div>
    </footer>
  );
};

export default Footer;

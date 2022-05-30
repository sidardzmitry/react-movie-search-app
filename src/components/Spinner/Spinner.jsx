import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className={`${"spinner-border"} ${styles["size-spinner"]}`}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
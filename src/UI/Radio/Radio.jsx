import styles from "./Radio.module.css";

const Radio = (props) => {
  const { type, handleFilter = Function.prototype } = props;
  return (
    <>
      <label htmlFor="all" className={styles["radio-label"]}>
        <input
          className={styles["radio-inp"]}
          type="radio"
          id="all"
          name="type"
          data-type="all"
          onChange={handleFilter}
          checked={type === "all"}
        />
        <span className={styles.fake}></span>
        <span className={styles["radio-text"]}>All</span>
      </label>
      <label htmlFor="movie" className={styles["radio-label"]}>
        <input
          className={styles["radio-inp"]}
          type="radio"
          id="movie"
          name="type"
          data-type="movie"
          onChange={handleFilter}
          checked={type === "movie"}
        />
        <span className={styles.fake}></span>
        <span className={styles["radio-text"]}>Movie</span>
      </label>
      <label htmlFor="series" className={styles["radio-label"]}>
        <input
          className={styles["radio-inp"]}
          type="radio"
          id="series"
          name="type"
          data-type="series"
          onChange={handleFilter}
          checked={type === "series"}
        />
        <span className={styles.fake}></span>
        <span className={styles["radio-text"]}>Series</span>
      </label>
    </>
  );
};

export default Radio;

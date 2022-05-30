import styles from "./Movies.module.css";

const Movie = (props) => {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;
  return (
    <div className={`${"col"} ${styles.cards}`}>
      <div className={`${"card"} ${"h-100"} ${styles.card}`} id={id}>
        <img
          src={poster}
          className={`${"card-img-top"} ${styles["card-img"]}`}
          alt="..."
        />
        <div className={styles["card-body"]}>
          <h5 className={styles["card-title"]}>{title}</h5>
          <div className={styles["card-year"]}>
            Year: {year}
            <p className={styles["card-text"]}>Type: {type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
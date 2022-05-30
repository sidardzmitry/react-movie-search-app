import styles from "./Button.module.css";

const Button = (props) => {
  const { searchMovies = Function.prototype, search, type } = props;
  return (
    <>
      <button
        type="button"
        className={styles["search-button"]}
        onClick={() => searchMovies(search, type)}
      >
        Search
      </button>
    </>
  );
};

export default Button;

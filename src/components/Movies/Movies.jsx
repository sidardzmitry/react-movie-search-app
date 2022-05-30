import styles from "./Movies.module.css";
import Movie from "..//Movie/Movie";
import Text from "..//Text/Text";

const Movies = (props) => {
  const { movies = [] } = props;
  return (
    <section
      className={`${"row"} ${"row-cols-1"} ${"row-cols-sm-2"} ${"row-cols-md-3"} ${"row-cols-lg-4"} ${"g-4"} ${
        styles.section
      }`}
    >
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <Text />
      )}
    </section>
  );
};

export default Movies;
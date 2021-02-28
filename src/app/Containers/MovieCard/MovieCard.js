import MovieGenre from "../../Components/MovieGenre/MovieGenre";
import MovieImage from "../../Components/MovieImage/MovieImage";
import MovieReleaseDate from "../../Components/MovieReleaseDate/MovieReleaseDate";
import MovieTitle from "../../Components/MovieTitle/MovieTitle";
import PropTypes from "prop-types";

export default function MovieCard(props) {
  return (
    <>
      <MovieImage url="{props.imageUrl}" />
      <MovieTitle title={props.title} />
      <MovieGenre genre={props.genre} />
      <MovieReleaseDate releaseDate={props.releaseDate} />
    </>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired
};

MovieCard.defaultProps = {
  imageUrl: "some url"
};

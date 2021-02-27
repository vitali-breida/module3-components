import MovieGenre from "../../Components/MovieGenre/MovieGenre";
import MovieImage from "../../Components/MovieImage/MovieImage";
import MovieReleaseDate from "../../Components/MovieReleaseDate/MovieReleaseDate";
import MovieTitle from "../../Components/MovieTitle/MovieTitle";

export default function MovieCard() {
  return (
    <>
      <MovieImage />
      <MovieTitle />
      <MovieGenre />
      <MovieReleaseDate />
    </>
  );
}

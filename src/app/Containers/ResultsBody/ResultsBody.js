import MovieCard from "../MovieCard/MovieCard";
import Box from "@material-ui/core/Box";

let movies = [
  {
    title: "Pulp Fiction",
    genre: "Action & Adventure",
    releaseDate: "2004"
  },
  {
    title: "Bohemian Rhapsody",
    genre: "Drama,Biography,Music",
    releaseDate: "2003"
  },
  {
    title: "Bill: vol2",
    genre: "Oscar winning movie",
    releaseDate: "1994"
  },
  {
    title: "Avengers: War of Infinity",
    genre: "Action & Adventure",
    releaseDate: "2004"
  },
  {
    title: "Inception",
    genre: "Action & Adventure",
    releaseDate: "2003"
  },
  {
    title: "Reservoir Dogs",
    genre: "Oscar winning movie",
    releaseDate: "1994"
  }
];
export default function ResultsBody() {
  return (
    <Box display="flex" alignItems="center">
      {movies.map((movie) => (
        <MovieCard
          title={movie.title}
          genre={movie.genre}
          releaseDate={movie.releaseDate}
        />
      ))}
    </Box>
  );
}

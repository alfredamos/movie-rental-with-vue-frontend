import type GenreDto from "../genres/genre.model";
import type MovieDto from "./movie.model";

interface MovieFormProps {
  initialMovie: MovieDto;
  genres: GenreDto[];
}

export default MovieFormProps;

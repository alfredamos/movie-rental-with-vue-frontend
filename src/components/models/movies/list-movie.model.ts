import type GenreDto from "../genres/genre.model";
import MovieDto from "./movie.model";

export default class ListMovieDto extends MovieDto{
      genre?: GenreDto;
}
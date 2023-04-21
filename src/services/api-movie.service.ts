import type MovieDto from "@/components/models/movies/movie.model";
import ApiService from "./api.service";
import movieUrl from "@/urls/movie.url";

class ApiMovie extends ApiService<MovieDto> {
  constructor() {
    super(movieUrl);
  }
}

const apiMovie = new ApiMovie();
export default apiMovie;

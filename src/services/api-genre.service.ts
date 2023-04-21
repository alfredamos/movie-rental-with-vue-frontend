import type GenreDto from "@/components/models/genres/genre.model";
import ApiService from "./api.service";
import genreUrl from "@/urls/genre.url";

class ApiGenre extends ApiService<GenreDto> {
  constructor() {
    super(genreUrl);
  }
}

const apiGenre = new ApiGenre();
export default apiGenre;

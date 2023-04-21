import type CustomerDto from "../customers/customer.model";
import type MovieDto from "../movies/movie.model";
import RentalDto from "./rental.model";

export default class ListRentalDto extends RentalDto{
      customer?: CustomerDto;
      movie?: MovieDto;
}
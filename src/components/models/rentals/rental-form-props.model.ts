import type CustomerDto from "../customers/customer.model";
import type MovieDto from "../movies/movie.model";
import type RentalDto from "./rental.model";

interface RentalFormProps{      
 customers: CustomerDto[];
 movies: MovieDto[];
 initialRental: RentalDto
}

export default RentalFormProps
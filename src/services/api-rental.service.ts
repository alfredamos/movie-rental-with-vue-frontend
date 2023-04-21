import type RentalDto from "@/components/models/rentals/rental.model";
import ApiService from "./api.service";
import rentalUrl from "@/urls/rental.url";

class ApiRental extends ApiService<RentalDto> {
  constructor() {
    super(rentalUrl);
  }
}

const apiRental = new ApiRental();
export default apiRental;

export default class RentalDto{
      id = "";
      rentalFee!: number;
      dateOut?: Date;     
      dateReturn?: Date;
      customerId!: string;
      movieId!: string;
}
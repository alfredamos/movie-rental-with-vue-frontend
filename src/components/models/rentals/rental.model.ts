export default class RentalDto{
      id = 0;
      rentalFee!: number;
      dateOut?: Date;     
      dateReturn?: Date;
      customerId!: number;
      movieId!: number;
}
export class Rental {
  id:number;
  filmId: number;
  customerId: number;

  constructor(id: number, filmId: number, customerId: number) {
    this.filmId = filmId;
    this.id=id;
    this.customerId = customerId;
  }
}

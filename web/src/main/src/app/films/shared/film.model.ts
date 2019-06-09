export class Film {
    id: number;
    title: string;
    director: string;
    releaseYear: number;

  constructor(id: number, title: string, director:string, releaseYear:number){
    this.id = id;
    this.title=title;
    this.director=director;
    this.releaseYear = releaseYear;
  }
}

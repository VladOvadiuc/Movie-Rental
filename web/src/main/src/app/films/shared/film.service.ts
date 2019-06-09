import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";

import {Film} from "./film.model";

import {Observable} from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class FilmService {
  private filmsUrl = 'http://localhost:8008/films';

  constructor(private httpClient: HttpClient) {
  }

  getFilms(): Observable<Film[]> {
    return this.httpClient
      .get<Array<Film>>(this.filmsUrl);
  }

  getFilm(id: number): Observable<Film> {
    return this.getFilms()
      .map(films=> films.find(film => film.id === id));
  }

  update(film): Observable<Film> {
    const url = `${this.filmsUrl}/${film.id}`;
    return this.httpClient
      .put<Film>(url, film);
  }

  save(title: string, director: string, releaseYear: number): Observable<Film> {
    let film = {title, director, releaseYear};
    return this.httpClient
      .post<Film>(this.filmsUrl, film);
  }

  delete(film): Observable<Film> {
    const url = `${this.filmsUrl}/${film.id}`;
    return this.httpClient.delete<Film>(url);
  }
}

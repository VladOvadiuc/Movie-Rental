import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {FilmService} from "../shared/film.service";
import {Film} from "../shared/film.model";


@Component({
  moduleId: module.id,
  selector: 'all-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css'],
})
export class FilmListComponent implements OnInit {
  errorMessage: string;
  films: Array<Film>;
  selectedFilm: Film;

  constructor(private filmService: FilmService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms() {
    this.filmService.getFilms()
      .subscribe(
        films => this.films = films,
        error => this.errorMessage = <any>error
      );
  }

  onSelect(film: Film): void {
    this.selectedFilm = film;
  }

  gotoDetail(): void {
    this.router.navigate(['/film/detail', this.selectedFilm.id]);
  }
  delete(film): void {
    this.filmService.delete(film).subscribe( data => {
      this.films = this.films.filter(f => f !== film);
    })

  }

}

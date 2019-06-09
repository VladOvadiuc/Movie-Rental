import {Component, Input, OnInit} from '@angular/core';
import {FilmService} from "../shared/film.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from '@angular/common';
import {Film} from "../shared/film.model";

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css'],
})

export class FilmDetailComponent implements OnInit {

  @Input() film: Film;

  constructor(private filmService: FilmService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.filmService.getFilm(+params['id']))
      .subscribe(film => this.film = film);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.filmService.update(this.film)
      .subscribe(_ => this.goBack());
  }
}

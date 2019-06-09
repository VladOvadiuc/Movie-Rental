"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var FilmListComponent = (function () {
  function FilmListComponent(filmService, router) {
    this.filmService = filmService;
    this.router = router;
  }
  FilmListComponent.prototype.ngOnInit = function () {
    this.getFilms();
  };
  FilmListComponent.prototype.getFilms = function () {
    var _this = this;
    this.filmService.getFilms()
      .subscribe(function (films) { return _this.films = films; }, function (error) { return _this.errorMessage = error; });
  };
  FilmListComponent.prototype.onSelect = function (film) {
    this.selectedFilm = film;
  };
  FilmListComponent.prototype.gotoDetail = function () {
    this.router.navigate(['/film/detail', this.selectedFilm.id]);
  };
  FilmListComponent.prototype.delete = function() {
    this.filmService.delete(this.selectedFilm);
  };

  FilmListComponent = __decorate([
    core_1.Component({
      moduleId: module.id,
      selector: 'all-film-list',
      templateUrl: './film-list.component.html',
      styleUrls: ['./film-list.component.css'],
    })
  ], FilmListComponent);
  return FilmListComponent;
}());
exports.FilmListComponent = FilmListComponent;

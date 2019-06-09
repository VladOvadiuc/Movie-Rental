"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var FilmService = (function () {
  function FilmService(http) {
    this.http = http;
    this.filmsUrl = 'http://localhost:8080/films';
  }
  FilmService.prototype.getFilms = function () {
    return this.http.get(this.filmsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  };
  FilmService.prototype.extractData = function (res) {
    var body = res.json();
    return body.films || {};
  };
  FilmService.prototype.handleError = function (error) {
    var errMsg;
    if (error instanceof http_1.Response) {
      var body = error.json() || '';
      var err = body.error || JSON.stringify(body);
      errMsg = error.status + " - " + (error.statusText || '') + " " + err;
    }
    else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return rxjs_1.Observable.throw(errMsg);
  };
  FilmService.prototype.getFilm = function (id) {
    return this.getFilms()
      .map(function (films) { return films.find(function (film) { return film.id === id; }); });
  };
  FilmService.prototype.delete = function (film) {
    debugger;
    var url = this.filmsUrl/film.id;
    console.log(url);
    return this.http.delete(url);
  }
  FilmService = __decorate([
    core_1.Injectable()
  ], FilmService);
  return FilmService;
}());
exports.FilmService = FilmService;

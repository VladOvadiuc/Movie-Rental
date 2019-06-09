"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/switchMap');
var FilmDetailComponent = (function () {
    function FilmDetailComponent(filmService, route, location) {
        this.filmService = filmService;
        this.route = route;
        this.location = location;
    }
    FilmDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.filmService.getFilm(+params['id']); })
            .subscribe(function (film) { return _this.film = film; });
    };
    FilmDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input()
    ], FilmDetailComponent.prototype, "film", void 0);
    FilmDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-customer-detail',
            templateUrl: './film-detail.component.html',
            styleUrls: ['./film-detail.component.css'],
        })
    ], FilmDetailComponent);
    return FilmDetailComponent;
}());
exports.FilmDetailComponent = FilmDetailComponent;

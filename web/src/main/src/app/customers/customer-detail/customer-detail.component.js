"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/switchMap');
var CustomerDetailComponent = (function () {
    function CustomerDetailComponent(customerService, route, location) {
        this.customerService = customerService;
        this.route = route;
        this.location = location;
    }
    CustomerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.customerService.getCustomer(+params['id']); })
            .subscribe(function (customer) { return _this.customer = customer; });
    };
    CustomerDetailComponent.prototype.goBack = function () {
        this.location.back();
    };

    __decorate([
        core_1.Input()
    ], CustomerDetailComponent.prototype, "customer", void 0);
    CustomerDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-customer-detail',
            templateUrl: './customer-detail.component.html',
            styleUrls: ['./customer-detail.component.css'],
        })
    ], CustomerDetailComponent);
    return CustomerDetailComponent;
}());
exports.CustomerDetailComponent = CustomerDetailComponent;

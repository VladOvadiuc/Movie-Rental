"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CustomerListComponent = (function () {
  function CustomerListComponent(customerService, router) {
    this.customerService = customerService;
    this.router = router;
  }
  CustomerListComponent.prototype.ngOnInit = function () {
    this.getCustomers();
  };
  CustomerListComponent.prototype.getCustomers = function () {
    var _this = this;
    this.customerService.getCustomers()
      .subscribe(function (customers) { return _this.customers = customers; }, function (error) { return _this.errorMessage = error; });
  };
  CustomerListComponent.prototype.onSelect = function (customer) {
    this.selectedCustomer = customer;
  };
  CustomerListComponent.prototype.gotoDetail = function () {
    this.router.navigate(['/customer/detail', this.selectedCustomer.id]);
  };
  CustomerListComponent.prototype.delete = function() {
    this.customerService.delete(this.selectedCustomer);
  };

  CustomerListComponent = __decorate([
    core_1.Component({
      moduleId: module.id,
      selector: 'all-customer-list',
      templateUrl: './customer-list.component.html',
      styleUrls: ['./customer-list.component.css'],
    })
  ], CustomerListComponent);
  return CustomerListComponent;
}());
exports.CustomerListComponent = CustomerListComponent;

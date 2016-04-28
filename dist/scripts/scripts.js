"use strict";
angular.module("yapp", ["ui.router", "ngAnimate"]).config(["$stateProvider", "$urlRouterProvider", function(r, t) {
  t.when("/dashboard", "/dashboard/home"), t.otherwise("/login"), r.state("base", {
    "abstract": !0,
    url: "",
    templateUrl: "views/base.html"
  }).state("login", {
    url: "/login",
    parent: "base",
    templateUrl: "views/login.html",
    controller: "LoginCtrl"
  }).state("dashboard", {
    url: "/dashboard",
    parent: "base",
    templateUrl: "views/dashboard.html",
    controller: "DashboardCtrl"
  }).state("home", {
    url: "/home",
    parent: "dashboard",
    templateUrl: "views/dashboard/home.html"
  })
}]), angular.module("yapp").controller("LoginCtrl", ["$scope", "$location", function(r, t) {
  r.submit = function() {
    return t.path("/dashboard"), !1
  }
}]), angular.module("yapp").controller("DashboardCtrl", ["$scope", "$state", function(r, t) {
  r.$state = t
}]);

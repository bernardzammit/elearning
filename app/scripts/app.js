'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
angular
  .module('yapp', [
    'ui.router',
    'ngAnimate',
    'angular-svg-round-progressbar'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/home1');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
      .state('login', {
        url: '/login',
        parent: 'base',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('dashboard', {
        url: '/dashboard',
        parent: 'base',
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })

      .state('home1', {
        url: '/home1',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/home1.html'
      })

      .state('subjects', {
        url: '/subjects',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/subjects.html'
      })

      .state('year', {
        url: '/year',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/year.html',
        controller: 'YearCtrl'
      })

      .state('achievements', {
        url: '/achievements',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/achievements.html',
        controller: 'AchievementsCtrl'
      })

      .state('calendar', {
        url: '/calendar',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/calendar.html'
      })

      .state('settings', {
        url: '/settings',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/settings.html'
      });

  })

  .service('sharedProperties', function () {
    var selectedYear = 6;

    return {
      getYear: function () {
        return selectedYear;
      },
      setYear: function(value) {
        selectedYear = value;
      }
    };
  });

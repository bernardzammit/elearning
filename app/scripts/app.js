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
    'angular-svg-round-progressbar',
    'ngMaterial'
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
        templateUrl: 'views/dashboard/subjects.html',
        controller: 'SubjectsCtrl'
      })

      .state('forces', {
        url: '/forces',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/topic.html',
        controller: 'TopicCtrl'
      })

      .state('weatherEquipment', {
        url: '/weather',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/topic.html',
        controller: 'TopicCtrl'
      })

      .state('healthyDiets', {
        url: '/healthydiets',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/topic.html',
        controller: 'TopicCtrl'
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
        controller: 'SubjectsCtrl'
      });

  })

  .service('sharedProperties', function () {
    var playerScore = 0;
    var selectedYear = 6;
    var mathsBadgeProgress = 12;
    var englishBadgeProgress = 50;
    var malteseBadgeProgress = 75;
    var scienceBadgeProgress = 25;
    var ictBadgeProgress = 60;
    var geographyBadgeProgress = 100;

    return {

      getYear: function () {
        return selectedYear;
      },
      setYear: function(value) {
        selectedYear = value;
      },

      getPlayerScore: function () {
        return playerScore;
      },
      setPlayerScore: function(value) {
        playerScore = playerScore + value;
      },

      getMathsProgress: function() {
        return mathsBadgeProgress;
      },
      setMathsProgress: function(value) {
        mathsBadgeProgress = value;
      },

      getEnglishProgress: function() {
        return englishBadgeProgress;
      },
      setEnglishProgress: function(value) {
        englishBadgeProgress = value;
      },

      getMalteseProgress: function() {
        return malteseBadgeProgress;
      },
      setMalteseProgress: function(value) {
        malteseBadgeProgress = value;
      },

      getScienceProgress: function() {
        return scienceBadgeProgress;
      },
      setScienceProgress: function(value) {
        scienceBadgeProgress = value;
      },

      getIctProgress: function() {
        return ictBadgeProgress;
      },
      setIctProgress: function(value) {
        ictBadgeProgress = value;
      },

      getGeographyProgress: function() {
        return geographyBadgeProgress;
      },
      setGeographyProgress: function(value) {
        geographyBadgeProgress = value;
      }

    };
  });

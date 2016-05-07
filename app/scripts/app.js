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

  . directive('tabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: [ "$scope", function($scope) {
        var panes = $scope.panes = [];

        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        }

        this.addPane = function(pane) {
          if (panes.length == 0) $scope.select(pane);
          panes.push(pane);
        }
      }],
      template:
      '<div class="tabbable">' +
      '<ul class="nav nav-tabs">' +
      '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
      '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
      '</li>' +
      '</ul>' +
      '<div class="tab-content" ng-transclude></div>' +
      '</div>',
      replace: true
    };
  }).
  directive('pane', function() {
    return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      scope: { title: '@' },
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      },
      template:
      '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
      '</div>',
      replace: true
    };
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

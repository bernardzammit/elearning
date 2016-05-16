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
    'ngMaterial',
    '500tech.simple-calendar',
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
        templateUrl: 'views/dashboard/home1.html',
        controller: 'TodoCtrl'
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
    var scienceScore = 0;
    var selectedYear = 6;
    var mathsBadgeProgress = 12;
    var englishBadgeProgress = 50;
    var malteseBadgeProgress = 75;
    var scienceBadgeProgress = 0;
    var ictBadgeProgress = 60;
    var geographyBadgeProgress = 100;

    var grade6Topics = [
      { subject : 'maths', title: 'Fractions', reward: 'no'},
      { subject : 'maths', title: 'Perimeter and area', reward: 'no'},
      { subject : 'maths', title: 'Division', reward: 'no'},
      { subject : 'english', title: 'Essay Writing', reward: 'yes'},
      { subject : 'english', title: 'Past Tense', reward: 'no'},
      { subject : 'english', title: 'Dialogue', reward: 'no'},
      { subject : 'maltese', title: 'Comprehension', reward: 'yes'},
      { subject : 'maltese', title: 'Building Sentences', reward: 'yes'},
      { subject : 'maltese', title: 'Giving Directions', reward: 'no'},
      { subject : 'science', title: 'Forces', reward: 'no'},
      { subject : 'science', title: 'Weather Equipment', reward: 'no'},
      { subject : 'science', title: 'Healthy Diets', reward: 'no'},
      { subject : 'ict', title: 'Internet Safety', reward: 'yes'},
      { subject : 'ict', title: 'Programming with Logo', reward: 'no'},
      { subject : 'ict', title: 'Using Microsoft Word', reward: 'no'},
      { subject : 'geography', title: 'Farming', reward: 'yes'},
      { subject : 'geography', title: 'Reuse, Reduce, Recycle', reward: 'yes'},
      { subject : 'geography', title: 'Mediterranean Islands', reward: 'yes'}

    ];

    return {

      getYear: function () {
        return selectedYear;
      },
      setYear: function(value) {
        selectedYear = value;
      },

      getScienceScore: function () {
        return scienceScore;
      },
      setScienceScore: function(value) {
        scienceScore = scienceScore + value;
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
        scienceBadgeProgress = value + scienceBadgeProgress;
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
      },

      getGrade6Topics: function() {
        return grade6Topics;
      },
      setGrade6TopicsReward: function(title, reward){
        for (var i=0; i < grade6Topics.length; i++){
          if (grade6Topics[i].title === title){
            grade6Topics[i].reward = reward;
            break;
          }
        }
      }

    };
  });

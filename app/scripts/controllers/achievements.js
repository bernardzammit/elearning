'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('AchievementsCtrl', ['$scope', function($scope) {

    $scope.mathsBadgeProgress = 12;
    $scope.englishBadgeProgress = 50;
    $scope.malteseBadgeProgress = 75;
    $scope.scienceBadgeProgress = 25;
    $scope.ictBadgeProgress = 60;
    $scope.geographyBadgeProgress = 100;

  }]);

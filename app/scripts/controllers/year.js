'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('YearCtrl', ['$scope', '$interval', 'sharedProperties', function($scope, $interval,sharedProperties) {

    $scope.selectedYear = sharedProperties.getYear();

    $scope.setYear = function(selectedYear) {
      if (selectedYear === 4)
      {
        sharedProperties.setYear(4);
      }
      else if (selectedYear === 5)
      {
        sharedProperties.setYear(5);
      }
      else if (selectedYear === 6)
      {
        sharedProperties.setYear(6);
      }
    }

    $scope.getYear = function() {
      return sharedProperties.getYear();
    }
  }]);

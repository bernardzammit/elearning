'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */

angular.module('yapp')
  .controller('LoginCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.invalidLogin = false;
    $scope.submit = function() {

      if($scope.email == 'andy@gmail.com' && $scope.password == 'andystudent'){
        $location.path('/dashboard');
        return true;
      } else {
        $scope.invalidLogin = true;
      }
    }
  }]);

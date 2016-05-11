/**
 * Created by Bernard on 11/05/2016.
 */
angular.module('yapp')
  .controller('DateTimeCtrl', function($scope)
  {
    $scope.date = new Date();
  });

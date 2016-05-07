angular.module('yapp')
  .controller('TopicCtrl', ['$scope', '$state', function($scope, $state) {

    if ($state.current.name == 'forces'){
      $scope.topicName = "Forces";
      $scope.address = "views/forces/story.html";
    }
    else if ($state.current.name == 'weatherEquipment'){
      $scope.topicName = "Weather Equipment";
      $scope.address = "views/weatherwatch/story.html";
    }
    else if ($state.current.name == 'healthyDiets'){
      $scope.topicName = "Helathy Diets";
      $scope.address = "views/healthyeating/story.html";
    }






  }]);


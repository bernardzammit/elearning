'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('SubjectsCtrl', ['$scope', '$state', 'sharedProperties', function($scope, $state, sharedProperties) {

    $scope.selectedYear = sharedProperties.getYear();

    $scope.grade4Topics = [
      { subject : 'maths', title: '?????'},
      { subject : 'maths', title: 'Perimeter and area'},
      { subject : 'maths', title: 'Telling the time'},
      { subject : 'english', title: 'Poem Writing'},
      { subject : 'english', title: 'Spelling'},
      { subject : 'english', title: 'Story telling'},
      { subject : 'maltese', title: ''},
      { subject : 'maltese', title: ''},
      { subject : 'maltese', title: ''},
      { subject : 'science', title: 'Forces'},
      { subject : 'science', title: 'Weather Equipment'},
      { subject : 'science', title: 'Healthy Diets'},
      { subject : 'ict', title: 'Internet Safety'},
      { subject : 'ict', title: 'Programming with Logo'},
      { subject : 'ict', title: 'Using Microsoft Word'},
      { subject : 'geography', title: 'Farming'},
      { subject : 'geography', title: 'Reuse, Reduce, Recycle'},
      { subject : 'geography', title: 'Mediterranean Islands'}
    ];

    $scope.grade5Topics = [
      { subject : 'maths', title: '########'},
      { subject : 'maths', title: 'Perimeter and area'},
      { subject : 'maths', title: 'Telling the time'},
      { subject : 'english', title: 'Poem Writing'},
      { subject : 'english', title: 'Spelling'},
      { subject : 'english', title: 'Story telling'},
      { subject : 'maltese', title: ''},
      { subject : 'maltese', title: ''},
      { subject : 'maltese', title: ''},
      { subject : 'science', title: 'Forces'},
      { subject : 'science', title: 'Weather Equipment'},
      { subject : 'science', title: 'Healthy Diets'},
      { subject : 'ict', title: 'Internet Safety'},
      { subject : 'ict', title: 'Programming with Logo'},
      { subject : 'ict', title: 'Using Microsoft Word'},
      { subject : 'geography', title: 'Farming'},
      { subject : 'geography', title: 'Reuse, Reduce, Recycle'},
      { subject : 'geography', title: 'Mediterranean Islands'}
    ];

    $scope.grade6Topics = [
      { subject : 'maths', title: 'Fractions'},
      { subject : 'maths', title: 'Perimeter and area'},
      { subject : 'maths', title: 'Telling the time'},
      { subject : 'english', title: 'Essay Writing'},
      { subject : 'english', title: 'Past Tense'},
      { subject : 'english', title: 'Dialogue'},
      { subject : 'maltese', title: 'Comprehension'},
      { subject : 'maltese', title: 'Building Sentences'},
      { subject : 'maltese', title: 'Giving Directions'},
      { subject : 'science', title: 'Forces'},
      { subject : 'science', title: 'Weather Equipment'},
      { subject : 'science', title: 'Healthy Diets'},
      { subject : 'ict', title: 'Internet Safety'},
      { subject : 'ict', title: 'Programming with Logo'},
      { subject : 'ict', title: 'Using Microsoft Word'},
      { subject : 'geography', title: 'Farming'},
      { subject : 'geography', title: 'Reuse, Reduce, Recycle'},
      { subject : 'geography', title: 'Mediterranean Islands'}

    ];

    $scope.getTopics = function () {
      if ($scope.selectedYear == '4'){
        return $scope.grade4Topics;
      }
      if ($scope.selectedYear == '5') {
        return $scope.grade5Topics;
      }
      else if ($scope.selectedYear =='6'){
        return $scope.grade6Topics;
      }
    }


    $scope.loadPartial = function(link) {
      if (link == 'Forces')
      {
        $state.go('forces');
      }
      else if (link === 'Weather Equipment')
      {
        $state.go('weatherEquipment');
      }
      else if (link === 'Healthy Diets')
      {
        $state.go('healthyDiets');
      }

    }
  }]);

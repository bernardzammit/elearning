'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('SubjectsCtrl', ['$scope', '$state', function($scope, $state) {

    $scope.topics = [
      { subject : 'maths', title: 'Fractions', link: '../weather/story.html'},
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
      { subject : 'ict', title: 'Using Word'},
      { subject : 'geography', title: 'Farming'},
      { subject : 'geography', title: 'Reuse, Reduce, Recycle'},
      { subject : 'geography', title: 'Mediterranean Islands'}

    ];


    $scope.loadPartial = function(link) {
      $state.go('topics');
      //$scope.currentPartial = link;
      //alert($scope.currentPartial);
    }
  }]);

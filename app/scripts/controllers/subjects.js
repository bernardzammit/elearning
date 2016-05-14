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
    $scope.mathsBadgeProgress = sharedProperties.getMathsProgress();
    $scope.englishBadgeProgress =  sharedProperties.getEnglishProgress();
    $scope.malteseBadgeProgress =  sharedProperties.getMalteseProgress();
    $scope.scienceBadgeProgress =  sharedProperties.getScienceProgress();
    $scope.ictBadgeProgress =  sharedProperties.getIctProgress();
    $scope.geographyBadgeProgress =  sharedProperties.getGeographyProgress();

    $scope.mathsPoints = 10;
    $scope.englishPoints = 20;
    $scope.maltesePoints = 15;
    $scope.sciencePoints = sharedProperties.getScienceScore();
    $scope.ictPoints = 40;
    $scope.geographyPoints = 100;

    $scope.grade4Topics = [
      { subject : 'maths', title: 'Odd and even numbers'},
      { subject : 'maths', title: 'Sequences'},
      { subject : 'maths', title: 'Symbols'},
      { subject : 'english', title: 'Pronouns'},
      { subject : 'english', title: 'Prepositions'},
      { subject : 'english', title: 'Linking sentences'},
      { subject : 'maltese', title: 'Verbs'},
      { subject : 'maltese', title: 'Article'},
      { subject : 'maltese', title: 'Directions'},
      { subject : 'science', title: 'Plants and their lifecycle'},
      { subject : 'science', title: 'Habitats'},
      { subject : 'science', title: 'Sounds'},
      { subject : 'ict', title: 'Accessing the Internet'},
      { subject : 'ict', title: 'Using e-mail'},
      { subject : 'ict', title: 'Copy & Paste'},
      { subject : 'geography', title: 'Maps'},
      { subject : 'geography', title: 'Maltese Feasts'},
      { subject : 'geography', title: 'Maltese Traditions'}
    ];

    $scope.grade5Topics = [
      { subject : 'maths', title: 'Square numbers'},
      { subject : 'maths', title: 'Decimals'},
      { subject : 'maths', title: 'Multiplication'},
      { subject : 'english', title: 'Present Tense'},
      { subject : 'english', title: 'Past Tense'},
      { subject : 'english', title: 'Story Telling'},
      { subject : 'maltese', title: 'Present Tense'},
      { subject : 'maltese', title: 'Idioms'},
      { subject : 'maltese', title: 'Reading'},
      { subject : 'science', title: 'Light'},
      { subject : 'science', title: 'Materials'},
      { subject : 'science', title: 'The Earth'},
      { subject : 'ict', title: 'Using Microsoft Excel'},
      { subject : 'ict', title: 'Bookmarking websites'},
      { subject : 'ict', title: 'File Attachments in e-mail'},
      { subject : 'geography', title: 'Pollution'},
      { subject : 'geography', title: 'Deserts'},
      { subject : 'geography', title: 'Tourism'}
    ];

    $scope.grade6Topics = [
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
        //jew minn story line nghaddu listess points jew inehhu l value tal points jidher jew nippruvaw ingibu dak il value
        $scope.sciencePoints = sharedProperties.setScienceScore(60);
        $scope.scienceBadgeProgress = sharedProperties.setScienceProgress(33);
        //add reward
        for (var i=0; i < $scope.grade6Topics.length; i++){
          if ($scope.grade6Topics[i].title === "Forces"){
            alert($scope.grade6Topics[i].reward = 'yes');
          }
        }

        $state.go('forces');
      }
      else if (link === 'Weather Equipment')
      {
        $scope.sciencePoints = sharedProperties.setScienceScore(80);
        $scope.scienceBadgeProgress = sharedProperties.setScienceProgress(33);
        $state.go('weatherEquipment');
      }
      else if (link === 'Healthy Diets')
      {
        $scope.sciencePoints = sharedProperties.setScienceScore(70);
        $scope.scienceBadgeProgress = sharedProperties.setScienceProgress(34);
        $state.go('healthyDiets');
      }

    }
  }]);

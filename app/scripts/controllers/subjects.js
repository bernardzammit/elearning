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
      { subject : 'maths', title: 'Odd and even numbers', reward: 'no'},
      { subject : 'maths', title: 'Sequences', reward: 'no'},
      { subject : 'maths', title: 'Symbols', reward: 'no'},
      { subject : 'english', title: 'Pronouns', reward: 'no'},
      { subject : 'english', title: 'Prepositions', reward: 'no'},
      { subject : 'english', title: 'Linking sentences', reward: 'no'},
      { subject : 'maltese', title: 'Verbs', reward: 'no'},
      { subject : 'maltese', title: 'Article', reward: 'no'},
      { subject : 'maltese', title: 'Directions', reward: 'no'},
      { subject : 'science', title: 'Plants and their lifecycle', reward: 'no'},
      { subject : 'science', title: 'Habitats', reward: 'no'},
      { subject : 'science', title: 'Sounds', reward: 'no'},
      { subject : 'ict', title: 'Accessing the Internet', reward: 'no'},
      { subject : 'ict', title: 'Using e-mail', reward: 'no'},
      { subject : 'ict', title: 'Copy & Paste', reward: 'no'},
      { subject : 'geography', title: 'Maps', reward: 'no'},
      { subject : 'geography', title: 'Maltese Feasts', reward: 'no'},
      { subject : 'geography', title: 'Maltese Traditions', reward: 'no'}
    ];

    $scope.grade5Topics = [
      { subject : 'maths', title: 'Square numbers', reward: 'no'},
      { subject : 'maths', title: 'Decimals', reward: 'no'},
      { subject : 'maths', title: 'Multiplication', reward: 'no'},
      { subject : 'english', title: 'Present Tense', reward: 'no'},
      { subject : 'english', title: 'Past Tense', reward: 'no'},
      { subject : 'english', title: 'Story Telling', reward: 'no'},
      { subject : 'maltese', title: 'Present Tense', reward: 'no'},
      { subject : 'maltese', title: 'Idioms', reward: 'no'},
      { subject : 'maltese', title: 'Reading', reward: 'no'},
      { subject : 'science', title: 'Light', reward: 'no'},
      { subject : 'science', title: 'Materials', reward: 'no'},
      { subject : 'science', title: 'The Earth', reward: 'no'},
      { subject : 'ict', title: 'Using Microsoft Excel', reward: 'no'},
      { subject : 'ict', title: 'Bookmarking websites', reward: 'no'},
      { subject : 'ict', title: 'File Attachments in e-mail', reward: 'no'},
      { subject : 'geography', title: 'Pollution', reward: 'no'},
      { subject : 'geography', title: 'Deserts', reward: 'no'},
      { subject : 'geography', title: 'Tourism', reward: 'no'}
    ];



    $scope.getTopics = function () {
      if ($scope.selectedYear == '4'){
        return $scope.grade4Topics;
      }
      if ($scope.selectedYear == '5') {
        return $scope.grade5Topics;
      }
      else if ($scope.selectedYear =='6'){
        return sharedProperties.getGrade6Topics();
      }
    }


    $scope.loadPartial = function(link, reward) {
      var path = '';
      if (link == 'Forces') {
        path = 'forces';
      }
      else if (link === 'Weather Equipment') {
        path = 'weatherEquipment'
      }
      else if (link === 'Healthy Diets'){
        path = 'healthyDiets';
      }

      if (link == 'Forces' && reward == 'no')
      {
        //add check not to exceed 100% badge
        $scope.sciencePoints = sharedProperties.setScienceScore(60);
        $scope.scienceBadgeProgress = sharedProperties.setScienceProgress(33);
        //add reward
        sharedProperties.setGrade6TopicsReward(link, "yes");
      }
      else if (link === 'Weather Equipment')
      {
        $scope.sciencePoints = sharedProperties.setScienceScore(80);
        $scope.scienceBadgeProgress = sharedProperties.setScienceProgress(33);
        //add reward
        sharedProperties.setGrade6TopicsReward(link, "yes");
      }
      else if (link === 'Healthy Diets')
      {
        $scope.sciencePoints = sharedProperties.setScienceScore(70);
        $scope.scienceBadgeProgress = sharedProperties.setScienceProgress(34);
        //add reward
        sharedProperties.setGrade6TopicsReward(link, "yes");
      }
      $state.go(path);

    }
  }]);

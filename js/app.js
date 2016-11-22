
var app = angular.module('app', []);
app.controller('appController', function($scope){
  //Lionel
  $scope.ordered = false;
  $scope.prenom = "";


  //Robinson
  $scope.types = types;
  $scope.pates = pates;
  $scope.extras = extras;


  $scope.userChoose =
    {
      nbParts : '6',
      type : types[0],
      pate : pates[0],
      extras : [true, true, false, false] // Olive + Anchois
    };


  $scope.next = false;



});

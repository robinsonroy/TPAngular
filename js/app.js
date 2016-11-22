
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
      nbParts : '',
      type : 'Margherita',
      pate : 'Classique',
      extras : [
        {
        name:'none'
        }
      ]
    };


  $scope.next = false;



});

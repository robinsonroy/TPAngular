
var app = angular.module('app', []);
app.controller('appController', function($scope){
  //Lionel



  //Robinson
  $scope.types = types;
  $scope.pates = pates;
  $scope.extras = extras;

  $scope.userChoose =
    {
      nbParts : 10,
      type : 'Margherita',
      pate : 'Classique',
      extras : [
        {
        name:'none'
        }
      ]
    };

  console.log($scope.userChoose.nbParts);

  $scope.next = false;



});

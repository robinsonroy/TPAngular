
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
    extras : [] // Olive + Anchois
  };

  $scope.next = false;

  $scope.sliceArray = function(nbParts){
    var array = [];
    var j = 0;

    for (var i = 0; i < parseInt(nbParts/6); i++) {
      array.push(6);
      j++;
    }
    nbParts = nbParts-(j*6);
    if(nbParts != 0)
    array.push(nbParts);

    return array;
  }

  $scope.address = 0;
  $scope.countAdresse = function(){
    $scope.address++ ;
  }

  $scope.getArrayFormNumber = function(num) {
    var array = [];
    for (var i = 0; i < num; i++) {
      array.push(i);
    }
    return array;
  }

  $scope.addExtra = function(item, index){
    if ($scope.extras[index].checked) {
      $scope.userChoose.extras.push(item);
    }else {
      var j = 0;
      for (var i = 0; i < $scope.userChoose.extras.length; i++) {
        if($scope.userChoose.extras[i].name == item.name)
        j=i;
      }
      $scope.userChoose.extras.splice(j,1);
    }
  }

  $scope.checkPrice = function(){
    var price = 0;
    for (var i = 0; i < $scope.userChoose.extras.length; i++) {
      price = price + $scope.userChoose.extras[i].price;
    }
    price = price + $scope.userChoose.type.price + $scope.userChoose.pate.price

    return price * $scope.userChoose.nbParts/6;
  }

});

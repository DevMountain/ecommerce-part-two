var app = angular.module('ecommerce');

app.controller('shoppingCtrl', function($scope, products, users, mainService){
  console.log(products, users);
  $scope.products = products;
  $scope.users = users;
  $scope.updateUser = function(){
    mainService.getUser($scope.userSelect).then(function(res){
      console.log(res);
      $scope.user = res;
    }, function(err){
      console.log(err);
    });
  };
})

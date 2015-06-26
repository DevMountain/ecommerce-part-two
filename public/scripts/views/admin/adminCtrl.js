var app = angular.module('ecommerce');
app.controller('adminCtrl', function($scope, mainService, products){

$scope.products = products;

function getProducts(){
  mainService.getProducts().then(function(res){
    $scope.products = res;
  }, function(err){
    console.log(err);
  })
}

$scope.addProduct = function(){
  mainService.postProduct($scope.newProduct).then(function(res){
    getProducts();
  })
};

$scope.update = function(product){
  mainService.updateProduct(product).then(function(res){
    getProducts();
  }, function(err){
    console.log(err)
  })
}

$scope.removeProduct = function(id){
  mainService.removeProduct(id).then(function(res){
    getProducts();
  }, function(err){
    console.log(err);
  })
}

})

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
  $scope.addToCart = function(item){
    // Will add quantity functionality later
    
    // Also, I would add an endpoint just for adding to carts, not updating
    // the entire user document in the database.
    // Refer to http://mongoosejs.com/docs/subdocs.html when
    // building the carts endpoint.
    $scope.user.cart[0].products.push({product: item._id})
    console.log(item, $scope.user.cart[0]);
    mainService.updateCart($scope.user._id, {cart: [{
      products: $scope.user.cart[0].products
    }]}).then(function(res){
      console.log(res);
      $scope.updateUser();
    }, function(err){
      console.log(err);
    });
  }
})

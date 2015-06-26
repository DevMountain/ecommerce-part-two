var app = angular.module('ecommerce');
app.service('mainService', function($http){

this.getProducts = function(){
  return $http({
    method: 'GET',
    url: 'http://localhost:9999/api/products'
  })
}

this.postProduct = function(product){
  console.log('service')
  return $http({
    method: 'POST',
    url: 'http://localhost:9999/api/products',
    data: product
  });
};

this.updateProduct = function(product){
  return $http({
    method: 'PUT',
    url: 'http://localhost:9999/api/products/' + product._id,
    data: product
  })
}

this.removeProduct = function(id){
  return $http({
    method:'DELETE',
    url: 'http://localhost:9999/api/products/' + id
  })
}

})

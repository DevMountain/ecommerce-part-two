var app = angular.module('ecommerce');
app.service('mainService', function($http, $q){

this.getProducts = function(){
  var deferred = $q.defer();
  $http({
    method: 'GET',
    url: 'http://localhost:9999/api/products'
  }).then(function(res){
    deferred.resolve(res.data);
  }, function(err){
    deferred.reject(err)
  })
  return deferred.promise;
}

this.postProduct = function(product){
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

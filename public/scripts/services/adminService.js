var app = angular.module('ecommerce');

app.service('adminService', function($http, $q){
  this.getUsers = function(){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://localhost:9999/api/users'
    }).then(function(res){
      deferred.resolve(res.data);
    }, function(err){
      deferred.reject(err)
    })
    return deferred.promise;
  };
})

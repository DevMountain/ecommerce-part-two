var app = angular.module('ecommerce', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/register', {
    templateUrl: 'views/register/registerTmpl.html',
    controller: 'registerCtrl',
    resolve: {
      users: function(adminService){
          return adminService.getUsers();
        }
    }
  })
  .when('/shopping', {
    templateUrl: 'views/shopping/shoppingTmpl.html',
    controller: 'shoppingCtrl',
    resolve: {
      products: function(mainService){
        return mainService.getProducts();
      }
    }
  })
  .when('/admin', {
    templateUrl: 'views/shopping/shoppingTmpl.html',
    controller: 'adminCtrl',
    resolve: {
      products:function(mainService){
        return mainService.getProducts()
      }
    }
  })
  .otherwise({
    redirectTo: '/shopping'
  });
});

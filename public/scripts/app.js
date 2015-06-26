var app = angular.module('ecommerce', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/register', {
    templateUrl: 'scripts/views/register/registerTmpl.html',
    controller: 'registerCtrl',
    resolve: {
      users: function(adminService){
          return adminService.getUsers();
        }
    }
  })
  .when('/shopping', {
    templateUrl: 'scripts/views/shopping/shoppingTmpl.html',
    controller: 'shoppingCtrl',
    resolve: {
      products: function(mainService){
        return mainService.getProducts();
      }
    }
  })
  .when('/admin', {
    templateUrl: 'scripts/views/admin/adminTmpl.html',
    controller: 'adminCtrl',
    resolve: {
      products:function(mainService){
        return mainService.getProducts();
      }
    }
  })
  .otherwise({
    redirectTo: '/shopping'
  });
});

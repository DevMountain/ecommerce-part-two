var app = angular.module('ecommerce', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/register', {
    templateUrl: 'scripts/views/register/registerTmpl.html',
    controller: 'registerCtrl'
  })
  .when('/shopping', {
    templateUrl: 'scripts/views/shopping/shoppingTmpl.html',
    controller: 'shoppingCtrl',
    resolve: {
      products: function(mainService){
        return mainService.getProducts();
      },
      users: function(adminService){
        return adminService.getUsers();
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

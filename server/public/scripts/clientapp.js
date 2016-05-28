var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: '/views/home.html',
    controller: "HomeController"
  })
  $routeProvider
    .when('/pets', {
      templateUrl: '/views/pets.html',
      controller: "PetsController"
    })
    .when('/faves', {
      templateUrl: '/views/faves.html',
      controller: "FavesController"
    })

}]);

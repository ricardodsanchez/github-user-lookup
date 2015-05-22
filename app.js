(function(){
  
  var app = angular.module('GithubApp', ['ngRoute']);
  
  app.config(function($routeProvider){
      $routeProvider
          .when("/main", {
            templateUrl: "main.html",
            controller: "MainCtrl"
          })
          .when("/user/:username", {
            templateUrl: "user.html",
            controller: "UserCtrl"
          })
          .otherwise({redirectTo: "/main"});
  });
  
}());
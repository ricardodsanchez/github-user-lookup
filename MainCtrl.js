(function() {

  var app = angular.module("GithubApp");

  var MainCtrl = function($scope, $log, $location) {

    $scope.search = function(username) {
      $log.info("Searching for " + username);
      $location.path("/user/" + username);
    };

    $scope.username = "ricardodsanchez";

  };

  app.controller('MainCtrl', ["$scope", "$log", "$location", MainCtrl]); //pass an array with the scope and http dependencies
  //when used in production to make sure minifiers
  // don't cause errors

})();
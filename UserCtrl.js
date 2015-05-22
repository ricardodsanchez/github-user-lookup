(function() {

  var app = angular.module("GithubApp");

  var UserCtrl = function($scope, github, $log, $routeParams) {

    var onGetUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user)
        .then(onRepos, onError);
    };

    var onRepos = function(data) {
      $scope.repos = data;
    };

    var onError = function(response) {
      $scope.error = "Coult not fetch the user";
    };

    $log.info("routeParams:" + $routeParams.username);

    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "+name";
    github.getUser($scope.username).then(onGetUserComplete, onError);

  };

  app.controller('UserCtrl', ["$scope", "github", "$log", "$routeParams", UserCtrl]); //pass an array with the scope and http dependencies
  //when used in production to make sure minifiers
  // don't cause errors

})();
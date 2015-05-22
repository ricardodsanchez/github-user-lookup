(function(){
  
  var github = function($http){
    
    var getUser = function(username){
      return $http.get("https://api.github.com/users/" + username)
                  .then(function(response){
                    return response.data;
                  });
    };
    
    var getRepos = function(user){
      return $http.get(user.repos_url)
                  .then(function(response){
                    return response.data;
                  });
    };
    
    // service definition
    return {
      getUser: getUser,
      getRepos: getRepos
    };
    
  };
  
  // register and configure service with Angular
  var module = angular.module('GithubApp');
  module.factory("github", github);
  
}());
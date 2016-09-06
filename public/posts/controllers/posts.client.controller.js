angular.module('posts').controller('PostsController', [
  '$scope', '$routeParams', '$location', 'Authentication', 'Posts',
  function($scope, $routeParams, $location, Authentication, Posts) {
    $scope.authentication = Authentication;
    
    $scope.create = function() {
      var post = new Posts({
        title: this.title,
        content: this.content
      });
      
      post.$save(function(response) {
        console.log('good');
        $location.path('posts/' + response._id);  
      }, function(errorResponse) {
        console.log(errorResponse);
      });
    }; 

    $scope.findOne = function() {
      $scope.post = Posts.get({
        postId: $routeParams.postId
      });
    };
  
    $scope.find = function() {
      $scope.posts = Posts.query(); 
    };
  } 
]);

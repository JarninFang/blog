var mainApplicationModuleName = 'blog';
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource', 'ngRoute', 'home', 'users', 'posts']);

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainApplicationModuleName]);
});

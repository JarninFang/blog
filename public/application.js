var mainApplicationModuleName = 'blog'
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute', 'home', 'users']);

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainApplicationModuleName]);
});

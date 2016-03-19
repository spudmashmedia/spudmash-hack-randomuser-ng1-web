angular
  .module('main')
  .directive('mainProfile', function() {
    return {
      restrict: 'E',
      templateUrl: 'main/directives/main.directive.profile.template.html'
    };
  });

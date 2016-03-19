(function(){
  'use strict';

  /**
   * @ngdoc function
   * @name srcApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the srcApp
   */
  angular
    .module('main')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', 'mainFactory', 'MainSvc'];

  function MainCtrl($scope, mainFactory, MainSvc) {
    var vm = this;

    //unit test dummy
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // data bind object
    vm.GetUserServiceClick = GetUserServiceClick;
    vm.data = "";

    mainFactory
      .GetUser()
      .then(function(response){
        vm.data = response;
      });


    //random user
    function GetUserServiceClick() {

      MainSvc
        .GetUser()
        .then( function(response){
          vm.data = response.data;
        });
    }
  }
})();

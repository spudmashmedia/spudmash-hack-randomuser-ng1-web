(function() {
  'use strict';

  angular
    .module('main')

  .service('MainSvc', MainSvc)
    .factory('mainFactory', mainFactory);

  //
  // Service - this will consistently hit the url
  // for new data
  //
  MainSvc.$inject = ['$http'];
  function MainSvc($http) {
    var vm = this;

    var url = 'https://randomuser.me/api/';

    vm.GetUser = GetUserService;

    function GetUserService() {
      return $http
        .get(url)
        .success(function(response) {
          response.ThisIsASingleton = false;
          return response.data;
        });
    }
  }


  //
  // Factory - singleton
  // gets run once during init and object
  // is reused
  //
  mainFactory.$inject = ['$http'];
  function mainFactory($http) {
    var url = 'https://randomuser.me/api/';

    var profile = {};

    profile.GetUser = GetUserService;

    function GetUserService() {
      return $http
        .get(url)
        .then(function(response) {
          var temp = response.data;
          temp.ThisIsASingleton = true;
          return temp;
        });
    };

    return profile;
  }

})();

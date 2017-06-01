(function() {
  'use strict';

  angular
    .module('expotec')
    .factory('LoginService', LoginService);

  LoginService.$inject = ['$http'];

  /* @ngInject */
  function LoginService($http) {
    var service = {
      function: function
    };

    return service;

    function function() {

    }
  }
})();

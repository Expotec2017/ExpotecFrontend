(function() {
  'use strict';

  angular
    .module('expotec')
    .factory('LoginService', LoginService);

  LoginService.$inject = ['$http', 'BASE_URL'];

  /* @ngInject */
  function LoginService($http, BASE_URL) {
    var service = {
      login: login,
      logout: logout
    };

    return service;

    function login(object) {
      var url = BASE_URL.URL + '/login';
      return $http.post(url, object);
    }

    function logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('document');
    }
  }
})();

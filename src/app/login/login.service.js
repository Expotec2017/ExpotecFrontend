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
      var url = BASE_URL.URL + '/logout';
      var object = {};
      object['token'] = localStorage.getItem('token');
      object['document'] = localStorage.getItem('document');

      return $http.post(url, object)
        .then(function() {
          localStorage.removeItem('token');
          localStorage.removeItem('document');
        });
    }
  }
})();

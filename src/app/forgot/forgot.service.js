(function() {
  'use strict';

  angular
    .module('expotec')
    .factory('ForgotService', ForgotService);

  ForgotService.$inject = ['$http', 'BASE_URL'];

  /* @ngInject */
  function ForgotService($http, BASE_URL) {
    var service = {
      forgot: forgot
    };

    return service;

    function forgot(object) {
      var url = BASE_URL.URL + '/request_reset_password';

      return $http.post(url, object);
    }
  }
})();

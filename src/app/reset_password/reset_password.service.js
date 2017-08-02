(function() {
  'use strict';

  angular
    .module('expotec')
    .factory('ResetPasswordService', ResetPasswordService);

  ResetPasswordService.$inject = ['$http', 'BASE_URL'];

  /* @ngInject */
  function ResetPasswordService($http, BASE_URL) {
    var service = {
      updatePassword: updatePassword
    };

    return service;

    function updatePassword(object) {
      var url = BASE_URL.URL + '/reset_password';

      return $http.post(url, object);
    }
  }
})();

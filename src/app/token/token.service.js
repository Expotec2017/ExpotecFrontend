(function() {
  'use strict';

  angular
    .module('expotec')
    .factory('TokenSubscriptionService', TokenSubscriptionService);

  TokenSubscriptionService.$inject = ['$http', 'BASE_URL'];

  /* @ngInject */
  function TokenSubscriptionService($http, BASE_URL) {
    var service = {
      passwrodConfirmation: passwrodConfirmation
    };

    return service;

    function passwrodConfirmation(object) {
      var url = BASE_URL.URL + '/subscription/activate';

      return $http.post(url, object);
    }
  }
})();

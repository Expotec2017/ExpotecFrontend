(function() {
  'use strict';

  angular
    .module('expotec')
    .factory('SubscriptionService', SubscriptionService);

  SubscriptionService.$inject = ['BASE_URL', '$http'];

  /* @ngInject */
  function SubscriptionService(BASE_URL, $http) {
    var service = {
      createSubscription: createSubscription
    };

    return service;

    function createSubscription(object) {
      var url = BASE_URL.URL + '/subscription';
      return $http.post(url, object);
    }
  }
})();

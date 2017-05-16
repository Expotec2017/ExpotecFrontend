(function() {
  'use strict';

  angular
    .module('expotec')
    .factory('StateService', StateService);

  StateService.$inject = ['$http'];

  /* @ngInject */
  function StateService($http) {
    var service = {
      getState: getState
    };

    return service;

    function getState() {
      return $http.get()
        .then(function() { })
        .catch(function() { });
    }
  }
})();

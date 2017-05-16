(function() {
  'use strict';

  angular
    .module('expotec')
    .factory('CityService', CityService);

  CityService.$inject = ['$http'];

  /* @ngInject */
  function CityService($http) {
    var service = {
      getCityByState: getCityByState
    };

    return service;

    function getCityByState(state_id) {
      return $http.get()
        .then(function() { })
        .catch(function() { });
    }
  }
})();

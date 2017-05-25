(function() {
  'use strict';

  angular
    .module('expotec')
    .factory('NeighborhoodService', NeighborhoodService);

  NeighborhoodService.$inject = ['$http'];

  /* @ngInject */
  function NeighborhoodService($http) {
    var service = {
      getNeighborhoodByCity: getNeighborhoodByCity
    };

    return service;

    function getNeighborhoodByCity(city_id) {
      return $http.get()
        .then(function() { })
        .catch(function() { });
    }
  }
})();

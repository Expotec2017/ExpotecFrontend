(function() {
  'use strict';

  angular
    .module('expotec')
    .factory('StreetService', StreetService);

  StreetService.$inject = ['$http'];

  /* @ngInject */
  function StreetService($http) {
    var service = {
      getStreetByNeighborhood: getStreetByNeighborhood,
      getStreetByCep: getStreetByCep
    };

    return service;

    function getStreetByNeighborhood(neighborhood_id) {
      return $http.get()
        .then(function() { })
        .catch(function() { });
    }

    function getStreetByCep(cep) {
      return $http.get()
        .then(function() { })
        .catch(function() { });
    }
  }
})();

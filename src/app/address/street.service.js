(function() {
  'use strict';

  angular
    .module('expotec')
    .factory('StreetService', StreetService);

  StreetService.$inject = ['$http', 'BASE_URL'];

  /* @ngInject */
  function StreetService($http, BASE_URL) {
    var service = {
      getStreetByNeighborhood: getStreetByNeighborhood,
      getStreetByZipcode: getStreetByZipcode
    };

    return service;

    function getStreetByNeighborhood(neighborhood_id) {
      var url = BASE_URL.URL + '/street?neighborhood=' + neighborhood_id;
      return $http.get(url)
        .then(function(result) { return result })
        .catch(function(err) { return err });
    }

    function getStreetByZipcode(zipcode) {
      var url = BASE_URL.URL + '/street?zipcode=' + zipcode;
      return $http.get(url)
        .then(function(result) { return result })
        .catch(function(err) { return err });
    }
  }
})();

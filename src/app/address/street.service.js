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
      getStreetByZipcode: getStreetByZipcode,
      getTypeStreet: getTypeStreet
    };

    return service;

    function getStreetByNeighborhood(neighborhood_id) {
      var url = BASE_URL.URL + '/street?neighborhood=' + neighborhood_id;
      return $http.get(url)
        .then(function(result) { return result })
        .catch(function(err) { return err });
    }

    function getStreetByZipcode(zipcode) {
      var url = BASE_URL.URL + '/zip/search/' + zipcode;
      return $http.get(url)
        .then(function(result) { return result.data; })
        .catch(function(err) { return err; });
    }

    function getTypeStreet() {
      var url = BASE_URL.URL + '/typestreet/list';
      return $http.get(url)
        .then(function(result) { return result.data; })
        .catch(function(err) { return err; });
    }
  }
})();

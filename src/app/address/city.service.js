(function() {
  'use strict';

  angular
    .module('expotec')
    .factory('CityService', CityService);

  CityService.$inject = ['$http', 'BASE_URL'];

  /* @ngInject */
  function CityService($http, BASE_URL) {
    var service = {
      getCitiesByState: getCitiesByState
    };

    return service;

    function getCitiesByState(state_id) {
      var url = BASE_URL.URL + '/cities/' + state_id;
      return $http.get(url)
        .then(function(result) { return result.data; })
        .catch(function(err) { return err; });
    }
  }
})();

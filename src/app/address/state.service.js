(function() {
  'use strict';

  angular
    .module('expotec')
    .factory('StateService', StateService);

  StateService.$inject = ['$http', 'BASE_URL'];

  /* @ngInject */
  function StateService($http, BASE_URL) {
    var service = {
      getStates: getStates
    };

    return service;

    function getStates() {
      var url = BASE_URL.URL + '/states';
      return $http.get(url)
        .then(function(result) { return result.data; })
        .catch(function(err) { return err; });
    }
  }
})();

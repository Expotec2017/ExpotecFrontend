(function() {
  'use strict';

  angular
    .module('expotec')
    .factory('PackageService', PackageService);

  PackageService.$inject = ['$http', 'BASE_URL'];

  /* @ngInject */
  function PackageService($http, BASE_URL) {
    var service = {
      getPackages: getPackages
    };

    return service;

    function getPackages() {
      var url = BASE_URL.URL + '/package/listByEvent';
      var object = {};
      object['token'] = localStorage.getItem('token');
      object['document'] = localStorage.getItem('document');

      return $http.post(url, object);
    }
  }
})();

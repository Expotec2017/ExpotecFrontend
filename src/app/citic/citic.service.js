(function() {
  'use strict';

  angular
    .module('expotec')
    .factory('CiticService', CiticService);

  CiticService.$inject = ['$http', 'BASE_URL'];

  /* @ngInject */
  function CiticService($http, BASE_URL) {

  }
})();

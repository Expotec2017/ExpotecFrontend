(function() {
  'use strict';

  angular
    .module('expotec')
    .factory('SpeakersService', SpeakersService);

  SpeakersService.$inject = ['$http', 'BASE_URL'];

  /* @ngInject */
  function SpeakersService($http, BASE_URL) {

  }
})();

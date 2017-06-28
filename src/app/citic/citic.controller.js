(function() {
  'use strict';

  angular
    .module('expotec')
    .controller('CiticController', CiticController);

  CiticController.$inject = ['CiticService', '$state'];

  /* @ngInject */
  function CiticController(CiticService, $state) {

  }
})();

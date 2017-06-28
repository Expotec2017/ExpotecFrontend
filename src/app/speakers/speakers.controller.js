(function() {
  'use strict';

  angular
    .module('expotec')
    .controller('SpeakersController', SpeakersController);

  SpeakersController.$inject = ['SpeakersService', '$state'];

  /* @ngInject */
  function SpeakersController(SpeakersService, $state) {

  }
})();

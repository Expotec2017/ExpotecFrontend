(function() {
  'use strict';

  angular
    .module('expotec')
    .controller('MainController', MainController);

  MainController.$inject = [];

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.year = new Date().getFullYear();
    vm.sendSubscription = sendSubscription;

    activate();

    function activate() {

    }

    function sendSubscription(subscription) {
      console.log(subscription);
    }
  }
})();

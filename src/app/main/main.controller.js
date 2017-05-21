(function() {
  'use strict';

  angular
    .module('expotec')
    .controller('MainController', MainController);

  MainController.$inject = ['SubscriptionService', 'StreetService'];

  /** @ngInject */
  function MainController(SubscriptionService, StreetService) {
    var vm = this;
    vm.year = new Date().getFullYear();
    vm.sendSubscription = sendSubscription;
    vm.getAddress = getAddress;

    activate();

    function activate() {

    }

    function sendSubscription(subscription) {
      SubscriptionService.createSubscription(subscription)
        .success(function (response) {
          console.log(response);
        })
        .error(function (err) {
          console.log(err);
        });
    }

    function getAddress(zipcode) {
      StreetService.getStreetByZipcode(zipcode)
        .success(function (response) {
          console.log(response);
        })
        .error(function (err) {
          console.log(err);
        });
    }
  }
})();

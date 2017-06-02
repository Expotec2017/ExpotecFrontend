(function() {
  'use strict';

  angular
    .module('expotec')
    .controller('MainController', MainController);

  MainController.$inject = ['SubscriptionService', 'StreetService', '$state'];

  /** @ngInject */
  function MainController(SubscriptionService, StreetService, $state) {
    var vm = this;
    vm.address = {};
    vm.show_address = false;
    vm.states = {};
    vm.cities = {};
    vm.errors = {};
    vm.year = new Date().getFullYear();
    vm.sendSubscription = sendSubscription;
    vm.getAddress = getAddress;

    activate();

    function activate() {

    }

    function sendSubscription(subscription) {
      if (typeof vm.address.zip !== 'undefined') {
        subscription.address.type_street = vm.address.zip.typeStreet.id;
        subscription.address.street = vm.address.zip.street;
        subscription.address.neighborhood = vm.address.zip.neighborhood;
        subscription.address.city = vm.address.zip.city.id;
      }

      SubscriptionService.createSubscription(subscription)
        .then(function () { $state.go('finish_subscription'); })
        .catch(function (err) { vm.errors = err.data; });
    }

    function getAddress(zipcode) {
      StreetService.getStreetByZipcode(zipcode)
        .then(function (result) { vm.address = result; vm.show_address = true; })
        .catch(function (err) { vm.errors = err; });
    }
  }
})();

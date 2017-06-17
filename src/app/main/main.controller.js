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
    vm.show_type_address = false;
    vm.states = {};
    vm.cities = {};
    vm.errors = {};
    vm.type_street = {};
    vm.year = new Date().getFullYear();
    vm.sendSubscription = sendSubscription;
    vm.getAddress = getAddress;

    activate();

    function activate() {

    }

    function sendSubscription(subscription) {
      if (typeof vm.address !== 'undefined') {
        if (vm.show_address) {
          subscription.address.type_street = vm.address.typeStreet.id;
          subscription.address.street = vm.address.street;
          subscription.address.neighborhood = vm.address.neighborhood;
        }
        subscription.address.city = vm.address.city.id;
      }

      SubscriptionService.createSubscription(subscription)
        .then(function () { $state.go('finish_subscription'); })
        .catch(function (err) { vm.errors = err.data; });
    }

    function getAddress(zipcode) {
      StreetService.getStreetByZipcode(zipcode)
        .then(function (result) {
          if (result.zip.typeStreet === null || typeof result.zip.typeStreet === 'undefined') {
            vm.show_type_address = true;
            vm.show_address = false;
            getTypeStreet();
          } else { vm.show_address = true; vm.show_type_address = false; }
          vm.address = result.zip;
        })
        .catch(function (err) { vm.errors = err; });
    }

    function getTypeStreet() {
      StreetService.getTypeStreet()
        .then(function(result) { vm.type_street = result; })
        .catch(function(err) { vm.errors = err; });
    }
  }
})();

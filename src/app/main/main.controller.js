(function() {
  'use strict';

  angular
    .module('expotec')
    .controller('MainController', MainController);

  MainController.$inject = ['SubscriptionService', 'StreetService', 'StateService', 'CityService'];

  /** @ngInject */
  function MainController(SubscriptionService, StreetService, StateService, CityService) {
    var vm = this;
    vm.address = {};
    vm.states = {};
    vm.cities = {};
    vm.errors = {};
    vm.year = new Date().getFullYear();
    vm.sendSubscription = sendSubscription;
    vm.getAddress = getAddress;
    vm.getCities = getCities;

    activate();

    function activate() {
      getStates();
    }

    function sendSubscription(subscription) {
      SubscriptionService.createSubscription(subscription)
        .then(function (response) { console.log(response); })
        .catch(function (err) { console.log(err); });
    }

    function getAddress(zipcode) {
      StreetService.getStreetByZipcode(zipcode)
        .then(function (result) { vm.address = result; vm.address.zip.zipcode = zipcode; })
        .catch(function (err) { console.log(err); });
    }

    function getStates() {
      StateService.getStates()
        .then(function (result) { vm.states = result; })
        .catch(function (err) { vm.errors = err; });
    }

    function getCities(state_id) {
      CityService.getCitiesByState(state_id)
        .then(function (result) { vm.cities = result; })
        .catch(function (err) { vm.errors = err; });
    }
  }
})();

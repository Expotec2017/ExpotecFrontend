(function() {
  'use strict';

  angular
    .module('expotec')
    .controller('CartController', CartController);

  CartController.$inject = ['CartService'];

  /* @ngInject */
  function CartController(CartService) {
    var vm = this;
    vm.cart = null;
    vm.errors = null;
    vm.card = true;
    vm.ticket = false;
    vm.month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    vm.year = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040];
    vm.enableCard = enableCard;
    vm.enableTicket = enableTicket;

    activate();

    function activate() {
      getCartInfo();
    }

    function getCartInfo() {
      CartService.getCart()
        .then(function (result) { vm.cart = result.data; })
        .catch(function (err) { vm.errors = err.data; });
    }

    function enableCard() { vm.card = true; vm.ticket = false; }

    function enableTicket() { vm.card = false; vm.ticket = true; }
  }
})();

(function() {
  'use strict';

  angular
    .module('expotec')
    .controller('CartController', CartController);

  CartController.$inject = ['CartService', '$state'];

  /* @ngInject */
  function CartController(CartService, $state) {
    var vm = this;
    vm.cart = null;
    vm.errors = null;
    vm.package_id = null;
    vm.code = null;
    vm.enable_buy_button = false;
    vm.card = true;
    vm.ticket = false;
    vm.month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    vm.year = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040];
    vm.enableCard = enableCard;
    vm.enableTicket = enableTicket;
    vm.PagSeguro = PagSeguro;

    activate();

    function activate() {
      getCartInfo();
    }

    function getCartInfo() {
      CartService.getCart()
        .then(function (result) { vm.cart = result.data; getSessionId(result.data.package.id); })
        .catch(function (err) {
          if (typeof err.data.message !== 'undefined') {
            $state.go('login')
          }
          vm.errors = err.data;
        });
    }

    function enableCard() { vm.card = true; vm.ticket = false; }

    function enableTicket() { vm.card = false; vm.ticket = true; }

    function getSessionId(package_id) {
      CartService.getSessionId(package_id)
        .then(function (result) {
          localStorage.setItem('code', result.data.code);
          vm.code = result.data.code;
          vm.package_id = result.data.package_id;
          vm.enable_buy_button = true;
        })
        .catch(function (err) { vm.errors = err.data; vm.enable_buy_button = false; });
    }

    function PagSeguro() {
      PagSeguroLightbox(vm.code);
    }
  }
})();

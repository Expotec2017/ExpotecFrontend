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

    activate();

    function activate() {
      getCartInfo();
    }

    function getCartInfo() {
      CartService.getCart()
        .then(function (result) { vm.cart = result.data; })
        .catch(function (err) { vm.errors = err.data; });
    }
  }
})();

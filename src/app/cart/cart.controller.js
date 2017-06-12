(function() {
  'use strict';

  angular
    .module('expotec')
    .controller('CartController', CartController);

  CartController.$inject = ['CartService'];

  /* @ngInject */
  function CartController(CartService) {
    var vm = this;

    activate();

    function activate() {

    }
  }
})();

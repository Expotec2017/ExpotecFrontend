(function() {
  'use strict';

  angular
    .module('expotec')
    .controller('PackagesController', PackagesController);

  PackagesController.$inject = ['PackageService', 'CartService', '$state'];

  /* @ngInject */
  function PackagesController(PackageService, CartService, $state) {
    var vm = this;
    vm.errors = null;
    vm.packages = null;
    vm.buy = buy;

    activate();

    function activate() {
      getPackages();
    }

    function getPackages() {
      PackageService.getPackages()
        .then(function(result) { vm.packages = result.data; })
        .catch(function(err) {
          vm.errors = err.data;
          if (err.data.message === 'Usuário deslogado.' && err.data.message !== null) { $state.go('login') }
        });
    }

    function buy(package_id) {
      CartService.addCart(package_id)
        .then(function () { $state.go('cart'); });
    }
  }
})();

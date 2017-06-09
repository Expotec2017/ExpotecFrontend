(function() {
  'use strict';

  angular
    .module('expotec')
    .controller('PackagesController', PackagesController);

  PackagesController.$inject = ['PackageService'];

  /* @ngInject */
  function PackagesController(PackageService) {
    var vm = this;
    vm.errors = null;
    vm.packages = null;

    activate();

    function activate() {
      // getPackages();
    }

    function getPackages() {
      PackageService.getPackages()
        .then(function(result) { vm.packages = result.data.return; })
        .catch(function(err) { vm.errors = err; });
    }
  }
})();

(function() {
  'use strict';

  angular
    .module('expotec')
    .controller('ForgotController', ForgotController);

  ForgotController.$inject = ['ForgotService', '$state'];

  /* @ngInject */
  function ForgotController(ForgotService, $state) {
    var vm = this;
    vm.forgot = forgot;

    function forgot(forgot) {
      ForgotService.forgot(forgot)
        .then(function() {
          localStorage.setItem('document', forgot.document);
          $state.go('home');
        })
        .catch(function(err) { vm.errors = err.data });
    }
  }
})();

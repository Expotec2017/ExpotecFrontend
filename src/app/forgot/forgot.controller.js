(function() {
  'use strict';

  angular
    .module('expotec')
    .controller('ForgotController', ForgotController);

  ForgotController.$inject = ['ForgotService'];

  /* @ngInject */
  function ForgotController(ForgotService) {
    var vm = this;
    vm.forgot = forgot;

    function forgot(forgot) {
      ForgotService.forgot(forgot)
        .then(function(result) {
          localStorage.setItem('document', login.document);
          $state.go('home');
        })
        .catch(function(err) { vm.errors = err.data });
    }
  }
})();

(function() {
  'use strict';

  angular
    .module('expotec')
    .controller('ResetPasswordController', ResetPasswordController);

  ResetPasswordController.$inject = ['ResetPasswordService', '$stateParams'];

  /* @ngInject */
  function ResetPasswordController(ResetPasswordService, $stateParams) {
    var vm = this;
    var id = null;
    var token = null;
    vm.errors = null;
    vm.updatePassword = updatePassword;

    activate();

    function activate() {
      id = $stateParams.id;
      token = $stateParams.token;
    }

    function updatePassword(password) {
      if (typeof password === 'undefined') { password = {}; }
      password.id = id;
      password.token = token;

      ResetPasswordService.updatePassword(password)
        .then(function () { $state.go('login'); })
        .catch(function(err) { vm.errors = err.data.errors; });
    }
  }
})();

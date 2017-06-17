(function() {
  'use strict';

  angular
    .module('expotec')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['LoginService', '$state'];

  /* @ngInject */
  function LoginController(LoginService, $state) {
    var vm = this;
    vm.errors = null;
    vm.login = login;

    function login(login) {
      LoginService.login(login)
        .then(function(result) {
          localStorage.setItem('document', login.document);
          localStorage.setItem('token', result.data.token);
          $state.go('app.packages');

        })
        .catch(function(err) { vm.errors = err.data });
    }
  }
})();

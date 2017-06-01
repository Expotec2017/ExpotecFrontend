(function() {
  'use strict';

  angular
    .module('expotec')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['LoginService'];

  /* @ngInject */
  function LoginController(LoginService) {
    var vm = this;
    vm.errors = null;
    vm.login = login;

    function login(login) {
      LoginService.login(login)
        .then(function(result) { console.log(result); })
        .catch(function(err) { vm.errors = err.data });
    }
  }
})();

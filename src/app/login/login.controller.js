(function() {
  'use strict';

  angular
    .module('expotec')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['LoginService', '$state'];

  /* @ngInject */
  function LoginController(LoginService, $state) {
    var vm = this;
    var date = new Date("08/09/2017 12:00:00");
    vm.errors = null;
    vm.date = null;
    vm.login = login;

    function login(login) {
      var now = new Date();

      if (now > date) {
        vm.date = "O sistema não está mais disponível para a compra de ingresso, para maiores informação entre em contato com a univel (45) 3036-3621";
      } else {
        LoginService.login(login)
        .then(function(result) {
          localStorage.setItem('document', login.document);
          localStorage.setItem('token', result.data.token);
          $state.go('packages');

        })
        .catch(function(err) { vm.errors = err.data });
      }
    }
  }
})();

SeuServico.funcao()
  .then(result)

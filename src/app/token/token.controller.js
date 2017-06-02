(function() {
  'use strict';

  angular
    .module('expotec')
    .controller('TokenSubscriptionController', TokenSubscriptionController);

  TokenSubscriptionController.$inject = ['$state', '$stateParams', 'TokenSubscriptionService'];

  /* @ngInject */
  function TokenSubscriptionController($state, $stateParams, TokenSubscriptionService) {
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
      password.id = id;
      password.token = token;

      TokenSubscriptionService.passwrodConfirmation(password)
        .then(function(result) { console.log(result) })
        .catch(function(err) { vm.errors = err.data; });
    }
  }
})();
(function() {
    'use strict';

    angular
        .module('expotec')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['LoginService'];

    /* @ngInject */
    function LoginController(LoginService) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();

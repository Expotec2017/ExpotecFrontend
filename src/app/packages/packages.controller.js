(function() {
    'use strict';

    angular
        .module('expotec')
        .controller('PackagesController', PackagesController);

    PackagesController.$inject = ['PackageService'];

    /* @ngInject */
    function PackagesController(PackageService) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();

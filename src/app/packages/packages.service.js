(function() {
    'use strict';

    angular
        .module('expotec')
        .factory('PackageService', PackageService);

    PackageService.$inject = ['$http'];

    /* @ngInject */
    function PackageService($http) {
        var service = {
            getPackages: getPackages
        };

        return service;

        function getPackages() {

        }
    }
})();

(function() {
  'use strict';

  angular
    .module('expotec')
    .config(router);

  router.$inject = ['$stateProvider', '$urlRouterProvider'];
  /** @ngInject */
  function router($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();

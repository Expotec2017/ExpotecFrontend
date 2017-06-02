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
    $stateProvider
      .state('finish_subscription', {
        url: '/finish',
        templateUrl: 'app/subscription/finish_subscription.html',
        controller: 'FinishSubscriptionController',
        controllerAs: 'vm'
      });

    $stateProvider
      .state('token', {
        url: '/token/:id/:token',
        templateUrl: 'app/token/token.html',
        controller: 'TokenSubscriptionController',
        controllerAs: 'vm'
      });
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      });
    $urlRouterProvider.otherwise('/');
  }

})();

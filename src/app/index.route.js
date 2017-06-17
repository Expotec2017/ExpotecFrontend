(function() {
  'use strict';

  angular
    .module('expotec')
    .config(router);

  router.$inject = ['$stateProvider', '$urlRouterProvider'];
  /** @ngInject */
  function router($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      });
    $stateProvider
      .state('app.finish_subscription', {
        url: '/finish',
        templateUrl: 'app/subscription/finish_subscription.html',
        controller: 'FinishSubscriptionController',
        controllerAs: 'vm'
      });

    $stateProvider
      .state('app.token', {
        url: '/token/:id/:token',
        templateUrl: 'app/token/token.html',
        controller: 'TokenSubscriptionController',
        controllerAs: 'vm'
      });
    $stateProvider
      .state('app.login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      });
    $stateProvider
      .state('app.packages', {
        url: '/packages',
        templateUrl: 'app/packages/packages.html',
        controller: 'PackagesController',
        controllerAs: 'vm'
      });
    $stateProvider
      .state('app.cart', {
        url: '/cart',
        templateUrl: 'app/cart/cart.html',
        controller: 'CartController',
        controllerAs: 'vm'
      });
    $urlRouterProvider.otherwise('/');
  }

})();

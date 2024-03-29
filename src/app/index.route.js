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
      .state('speakers', {
        url: '/speakers',
        templateUrl: 'app/speakers/speakers.html',
        controller: 'SpeakersController',
        controllerAs: 'vm'
      });
    $stateProvider
      .state('citic', {
        url: '/citic',
        templateUrl: 'app/citic/citic.html',
        controller: 'CiticController',
        controllerAs: 'vm'
      });
    $stateProvider
      .state('rooms', {
        url: '/rooms',
        templateUrl: 'app/rooms/rooms.html',
        controller: 'RoomsController',
        controllerAs: 'vm'
      });
    $stateProvider
      .state('courses', {
        url: '/courses',
        templateUrl: 'app/courses/courses.html',
        controller: 'CoursesController',
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
    $stateProvider
      .state('packages', {
        url: '/packages',
        templateUrl: 'app/packages/packages.html',
        controller: 'PackagesController',
        controllerAs: 'vm'
      });
    $stateProvider
      .state('cart', {
        url: '/cart',
        templateUrl: 'app/cart/cart.html',
        controller: 'CartController',
        controllerAs: 'vm'
      });
    $stateProvider
      .state('forgot', {
        url: '/forgot',
        templateUrl: 'app/forgot/forgot.html',
        controller: 'ForgotController',
        controllerAs: 'vm'
      });
    $stateProvider
      .state('reset_password', {
        url: '/reset_password/:id/:token',
        templateUrl: 'app/reset_password/reset_password.html',
        controller: 'ResetPasswordController',
        controllerAs: 'vm'
      });
    $urlRouterProvider.otherwise('/');
  }

})();

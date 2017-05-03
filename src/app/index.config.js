(function() {
  'use strict';

  angular
    .module('expotec')
    .config(config);

  config.$inject = ['$logProvider'];
  
  /** @ngInject */
  function config($logProvider) {
    $logProvider.debugEnabled(true);
  }
})();

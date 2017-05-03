(function() {
  'use strict';

  angular
    .module('expotec')
    .run(runBlock);

  runBlock.$inject = ['$log'];
  
  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

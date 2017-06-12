(function() {
  'use strict';

  angular
    .module('expotec')
    .factory('CartService', CartService);

  CartService.$inject = ['$http', 'BASE_URL'];

  /* @ngInject */
  function CartService($http, BASE_URL) {
    var service = {
      getCar: getCar,
      
    };

    return service;

    function  getCart() {
      var url = BASE_URL + 'SOMETHING';
      return $http.get(url)
        .then(function(result) { return result.data; })
        .catch(function(err) { return err; });
    }
  }
})();

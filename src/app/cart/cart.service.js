(function() {
  'use strict';

  angular
    .module('expotec')
    .factory('CartService', CartService);

  CartService.$inject = ['$http', 'BASE_URL'];

  /* @ngInject */
  function CartService($http, BASE_URL) {
    var service = {
      getCart: getCart
    };

    return service;

    function getCart() {
      var url = BASE_URL + 'SOMETHING';
      var object = {};
      object['token'] = localStorage.getItem('token');
      object['document'] = localStorage.getItem('document');

      return $http.post(url, object);
    }
  }
})();

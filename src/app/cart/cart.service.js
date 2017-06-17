(function() {
  'use strict';

  angular
    .module('expotec')
    .factory('CartService', CartService);

  CartService.$inject = ['$http', 'BASE_URL'];

  /* @ngInject */
  function CartService($http, BASE_URL) {
    var service = {
      getCart: getCart,
      addCart: addCart,
      getSessionId: getSessionId
    };

    return service;

    function getCart() {
      var url = BASE_URL.URL + '/subscription/cart/get';
      var object = {};
      object['token'] = localStorage.getItem('token');
      object['document'] = localStorage.getItem('document');

      return $http.post(url, object);
    }

    function addCart(object) {
      var url = BASE_URL.URL + '/subscription/cart/add';
      object['token'] = localStorage.getItem('token');
      object['document'] = localStorage.getItem('document');

      return $http.post(url, object);
    }

    function getSessionId(object) {
      var url = BASE_URL.URL + '/subscription/package';
      object['token'] = localStorage.getItem('token');
      object['document'] = localStorage.getItem('document');

      return $http.post(url, object)
        .then(function(result) { console.log(result); localStorage.setItem('code', result.code); });
    }
  }
})();

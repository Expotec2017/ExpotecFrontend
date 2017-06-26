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

    function addCart(package_id) {
      var url = BASE_URL.URL + '/subscription/cart/add';

      var object = {};
      object['package_id'] = package_id;
      object['token'] = localStorage.getItem('token');
      object['document'] = localStorage.getItem('document');

      return $http.post(url, object);
    }

    function getSessionId(package_id) {
      var url = BASE_URL.URL + '/subscription/package';

      var object = {};
      object['package_id'] = package_id;
      object['token'] = localStorage.getItem('token');
      object['document'] = localStorage.getItem('document');

      return $http.post(url, object);
    }
  }
})();

(function() {
  'use strict';

  angular
    .module('easebooking')
    .factory('CookieService', CookieService);

    function CookieService($cookies){
      var service = {
        currentCart: currentCart,
        addToCart: addToCart,
        emptyCart: emptyCart,
        addClient: addClient,
        getClient: getClient
      }

      return service;

      function addToCart(dest){
        $cookies.putObject('CURRENT_CART', dest);
      }

      function addClient(client){
        $cookies.putObject('CURRENT_CLIENT', client);
      }

      function getClient(client){
        return $cookies.getObject('CURRENT_CLIENT');
      }

      function currentCart(){
        return $cookies.getObject('CURRENT_CART');
      }

      function emptyCart(){
        $cookies.remove('CURRENT_CART');
      }

    }

})();

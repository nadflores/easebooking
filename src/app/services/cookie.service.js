(function() {
  'use strict';

  angular
    .module('easebooking')
    .factory('CookieService', CookieService);

    function CookieService($cookies){
      var service = {
        currentCart: currentCart,
        addToCart: addToCart,
        emptyCart: emptyCart
      }

      return service;

      function addToCart(dest){
        $cookies.putObject('CURRENT_CART', dest);
      }

      function currentCart(){
        return $cookies.getObject('CURRENT_CART');
      }

      function emptyCart(){
        $cookies.remove('CURRENT_CART');
      }

    }

})();

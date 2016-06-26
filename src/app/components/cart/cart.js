(function() {
  'use strict';

  angular
    .module('easebooking')
    .directive('cart', cart)
    .controller('CartController', CartController)

  /** @ngInject */
  function cart() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/cart/cart.html',
      controller: 'CartController',
      controllerAs: 'cart',
      bindToController: true
    };

    return directive;

  }

  function CartController($rootScope, CookieService){
    var vm = this;

    vm.currentCart = CookieService.currentCart();
    vm.emptyCart = emptyCart;

    function emptyCart(){
      CookieService.emptyCart();
      $rootScope.$broadcast('EMPTY_CART');
      vm.currentCart = CookieService.currentCart();
    }
  }

})();

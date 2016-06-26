(function() {
  'use strict';

  angular
    .module('easebooking')
    .controller('BookingController', BookingController);

  /** @ngInject */
  function BookingController($scope, MasterData, CookieService){
    var vm = this;

    vm.currentCart = CookieService.currentCart();

    $scope.$on('EMPTY_CART', function(){
      vm.currentCart = CookieService.currentCart();
    })

  }
})();

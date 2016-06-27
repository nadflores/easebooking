(function() {
  'use strict';

  angular
    .module('easebooking')
    .controller('ConfirmationController', ConfirmationController);

  /** @ngInject */
  function ConfirmationController(MasterData, CookieService){
    var vm = this;

    vm.dest = CookieService.currentCart();
    vm.client = CookieService.getClient();

  }
})();

(function() {
  'use strict';

  angular
    .module('easebooking')
    .controller('DestinationController', DestinationController);

  /** @ngInject */
  function DestinationController($state, $stateParams, MasterData, toastr, CookieService){
    var vm = this;

    vm.book = book;

    getDestination();

    function book(dest){
      CookieService.addToCart(dest);
      $state.go('booking');
    }

    function getDestination(){
      vm.destination = MasterData.destinationById($stateParams.id);
      if(!vm.destination){
        $state.go('home');
        toastr.warning("ID doesn't exist", 'Warning')
      }
    }
  }
})();

(function() {
  'use strict';

  angular
    .module('easebooking')
    .directive('bookingForm', bookingForm)
    .controller('BookingFormController', BookingFormController)

  /** @ngInject */
  function bookingForm() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/booking/bookingForm.html',
      controller: 'BookingFormController',
      controllerAs: 'form',
    };

    return directive;

  }

  function BookingFormController($state, MasterData, CookieService, toastr){
    var vm = this;

    /* VM Method */
    vm.book = book;

    /* VM Data */
    vm.chronics = MasterData.chronic();
    vm.gender = MasterData.gender();
    vm.currentCart = CookieService.currentCart();

    function book(client){
      CookieService.addClient(client)
      toastr.success(vm.currentCart.name + " was successfully booked!", 'Success')
      $state.go('confirmation');
    }
  }

})();

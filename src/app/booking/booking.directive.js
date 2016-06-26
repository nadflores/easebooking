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

  function BookingFormController(MasterData){
    var vm = this;

    vm.chronics = MasterData.chronic();
    vm.gender = MasterData.gender();
  }

})();

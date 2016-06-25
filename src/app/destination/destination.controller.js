(function() {
  'use strict';

  angular
    .module('easebooking')
    .controller('DestinationController', DestinationController);

  /** @ngInject */
  function DestinationController($state, $stateParams, MasterData, toastr){
    var vm = this;

    getDestination();

    function getDestination(){
      vm.destination = MasterData.destinationById($stateParams.id);
      console.log(vm.destination)
      if(!vm.destination){
        $state.go('home');
        toastr.warning("ID doesn't exist", 'Warning')
      }
    }
  }
})();

(function() {
  'use strict';

  angular
    .module('easebooking')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr, MasterData) {
    var vm = this;

    vm.destinations = MasterData.destinations();

  }
})();

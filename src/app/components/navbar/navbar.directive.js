(function() {
  'use strict';

  angular
    .module('easebooking')
    .directive('topBar', topBar)
    .controller('NavController', NavController)

  /** @ngInject */
  function topBar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: 'NavController',
      controllerAs: 'nav'
    };

    return directive;

  }

  function NavController($state){
    var vm = this;

    vm.home = home;

    function home(){
      $state.go('home');
    }
  }

})();

(function() {
  'use strict';

  angular
    .module('easebooking')
    .directive('topBar', topBar);

  /** @ngInject */
  function topBar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html'
    };

    return directive;

  }

})();

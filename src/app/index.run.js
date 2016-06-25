(function() {
  'use strict';

  angular
    .module('easebooking')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

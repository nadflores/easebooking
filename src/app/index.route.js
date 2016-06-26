(function() {
  'use strict';

  angular
    .module('easebooking')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('destinations', {
        url: '/destinations',
        template: '<div ui-view></view>',
        abstract: true
      })
      .state('destinations.detail', {
        url: '/:id',
        templateUrl: 'app/destination/destination.html',
        controller: 'DestinationController',
        controllerAs: 'dest'
      })
      .state('booking', {
        url: '/booking',
        templateUrl: 'app/booking/booking.html',
        controller: 'BookingController',
        controllerAs: 'book'
      });

    $urlRouterProvider.otherwise('/');
  }

})();

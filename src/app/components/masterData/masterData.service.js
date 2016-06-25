(function() {
  'use strict';

  angular
    .module('easebooking')
    .factory('MasterData', MasterData);

    function MasterData(){
      var service = {
        destinations: destinations,
        destinationById: destinationById
      }

      return service;

      function destinationById(id){
        var dest;
        angular.forEach(destinations(), function(value){
          if(value.id == id){
            dest = value;
          }
        })
        return dest;
      }

      function destinations(){
        return [
          {
            id: 1,
            name: 'PALAWAN - Underground River',
            description: 'Desc here',
            price: 1800.00
          },
          {
            id: 2,
            name: 'BOHOL - Chocolate Hills',
            description: 'Desc here',
            price: 1300.00
          },
          {
            id: 3,
            name: 'PANGASINAN - Hundred Island',
            description: 'Desc here',
            price: 1200.00
          },
          {
            id: 4,
            name: 'TAGAYTAY - Taal Volcano',
            description: 'Desc here',
            price: 1100.00
          },
          {
            id: 5,
            name: 'BAGUIO - Burnham Park',
            description: 'Desc here',
            price: 800.00
          },
          {
            id: 6,
            name: 'PUERTO PRINCESA - Scuba Diving',
            description: 'Desc here',
            price: 2500.00
          }
        ];
      }
    }

})();

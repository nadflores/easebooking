(function() {
  'use strict';

  angular
    .module('easebooking')
    .factory('MasterData', MasterData);

    function MasterData(){
      var service = {
        chronic: chronic,
        destinations: destinations,
        destinationById: destinationById,
        gender: gender,
      }

      return service;

      function chronic(){
        return [
          "Addison's disease",
          "Asthma",
          "Bronchiectasis",
          "Cardiac failure",
          "Cardiomyopathy",
          "Chronic obstructive pulmonary disorder",
          "Chronic renal disease",
          "Coronary artery disease",
          "Crohn's disease",
          "Diabetes insipidus",
          "Diabetes mellitus types 1 & 2",
          "Dysrhythmias",
          "Epilepsy",
          "Glaucoma",
          "Haemophilia",
          "Hyperlipidaemia",
          "Hypertension",
          "Hypothyroidism",
          "Multiple sclerosis",
          "Parkinson's disease",
          "Rheumatoid arthritis",
          "Schizophrenia",
          "Systemic lupus erythematosus",
          "Ulcerative colitis",
          "Bipolar Mood Disorder",
        ];
      }

      function gender(){
        return ['Male', 'Female'];
      }

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

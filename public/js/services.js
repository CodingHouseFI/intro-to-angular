'use strict';

angular.module('myApp')

.service('Swapi', function($http) {
  this.getPerson = id => {
    return $http.get(`http://swapi.co/api/people/${id}`);
  };
})

.factory('Transaction', function() {
  return {
    // color: bluemaofipj lakj aef0.,.afm /
  }
})

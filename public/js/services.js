'use strict';

angular.module('myApp')

.service('Swapi', function($http, $q) {
  this.getPerson = id => {
    return $http.get(`http://swapi.co/api/people/${id}`)
      .then(res => {
        let person = {
          name: res.data.name,
          birthyear: res.data.birth_year
        };

        this.myFunc()

        return $q.resolve(person);
      })
      .catch(err => {
        console.log('err:', err);
      })
  };
})

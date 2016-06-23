'use strict';

let app = angular.module('myApp', ['ngStorage']);

app.controller('mainCtrl', function($scope) {

  $scope.contacts = [{
    name: 'Bob',
    email: 'bob@bob.com',
    phone: '555callbob'
  }, {
    name: 'Bob',
    email: 'bob@bob.com',
    phone: '555callbob'
  }];

  $scope.addContact = () => {
    let newContact = angular.copy($scope.newContact);
    $scope.contacts.push(newContact);

    $scope.newContact = null;
  };

  $scope.removeContact = index => {
    $scope.contacts.splice(index, 1);
  };

});






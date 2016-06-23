'use strict';

angular.module('myApp')
.controller('mainCtrl', function($scope, $localStorage, Swapi) {

  Swapi.getPerson(5)  
    .then(res => {
      console.log('res.data:', res.data);
      $scope.person = res.data;
    })
    .catch(err => {
      console.log('err:', err);
    });


  $scope.storage = $localStorage.$default({
    transactions: []
  });

  $scope.addTransaction = () => {
    let transaction = angular.copy($scope.newTransaction);
    $scope.storage.transactions.push(transaction);
  };

  $scope.$watch(function() {
    return angular.toJson($scope.storage);
  }, function() {
    let balance = 0;
    let totalCredit = 0;
    let totalDebit = 0;

    $scope.storage.transactions.forEach(trans => {
      if(trans.type === 'credit') {
        balance += trans.value;
        totalCredit += trans.value;
      } else {
        balance -= trans.value;
        totalDebit += trans.value;
      }
    }, 0);

    $scope.balance = balance;
    $scope.totalCredit = totalCredit;
    $scope.totalDebit = totalDebit;
  });
});


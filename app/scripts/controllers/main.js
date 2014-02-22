'use strict';

angular.module('ngBitcoinArbitrageApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('http://192.168.1.124:5000/bitcoin-arbitrage/api/v1.0/opportunities').success(function(data) {
      $scope.opportunities = data.opportunities;
    });
  });
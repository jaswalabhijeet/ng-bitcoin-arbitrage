'use strict';

angular.module('ngBitcoinArbitrageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.opportunities = 
    [
        {
          "buyprice": 256.16576, 
          "kask": "MtGoxUSD", 
          "kbid": "BitstampUSD", 
          "perc": 144.57246027604288, 
          "profit": 3703.4514161682328, 
          "sellprice": 256.6, 
          "volume": 10.0
        }, 
        {
          "buyprice": 256.16576, 
          "kask": "MtGoxUSD", 
          "kbid": "BitstampUSD", 
          "perc": 144.57246027604288, 
          "profit": 3703.4514161682328, 
          "sellprice": 256.6, 
          "volume": 10.0
        }, 
        {
          "buyprice": 256.16576, 
          "kask": "MtGoxUSD", 
          "kbid": "CampBXUSD", 
          "perc": 137.24078881212426, 
          "profit": 3515.639096905731, 
          "sellprice": 256.56, 
          "volume": 10.0
        }, 
        {
          "buyprice": 256.16576, 
          "kask": "MtGoxUSD", 
          "kbid": "CampBXUSD", 
          "perc": 137.24078881212426, 
          "profit": 3515.639096905731, 
          "sellprice": 256.56, 
          "volume": 10.0
        }
      ]
  });

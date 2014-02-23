'use strict';

angular.module('ngBitcoinArbitrageApp')
  .controller('MainCtrl', function ($scope, $http) {
    setInterval(function() {
      $http.get('http://192.168.1.124:5000/bitcoin-arbitrage/api/v1.0/opportunities').success(function(data) {
        $scope.opportunities = data.opportunities;
        $scope.chartObject = {};

        $scope.chartObject.data = {'cols': [
            {id: 't', label: 'Topping', type: 'string'},
            {id: 's', label: 'Slices', type: 'number'}
          ], 'rows': [
            {c: [
                {v: 'Mushrooms'},
                {v: 3},
              ]},
              {c: [
                {v: 'Olives'},
                {v: 31}
              ]},
              {c: [
                {v: 'Zucchini'},
                {v: 1},
              ]},
              {c: [
                {v: 'Pepperoni'},
                {v: 2},
              ]}
            ]};
        
        
        // $routeParams.chartType == BarChart or PieChart or ColumnChart...
        $scope.chartObject.type = "BarChart";
        $scope.chartObject.options = {
            'title': 'How Much Pizza I Ate Last Night'
        }
      });
    }, 1000);
  });
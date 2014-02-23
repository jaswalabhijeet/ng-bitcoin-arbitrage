'use strict';

angular.module('ngBitcoinArbitrageApp')
  .controller('MainCtrl', function ($scope, $http) {
    setInterval(function() {
      $http.get('http://192.168.1.124:5000/bitcoin-arbitrage/api/v1.0/opportunities').success(function(data) {
        $scope.opportunities = data.opportunities;
        $scope.chartObject = {};

        for(var opp in $scope.opportunities) {
          rows.push({
            {c: [
              {v: opp.kbid + ' / ' + opp.kask},
              {v: opp.profit},
            ]}
          })
        }
        
        $scope.chartObject.data = {'cols': [
            {id: 't', label: 'Topping', type: 'string'},
            {id: 's', label: 'Slices', type: 'number'}
          ], 'rows': rows};
        
        
        // $routeParams.chartType == BarChart or PieChart or ColumnChart...
        $scope.chartObject.type = "BarChart";
        $scope.chartObject.options = {
            'title': 'How Much Pizza I Ate Last Night'
        }
      });
    }, 1000);
  });
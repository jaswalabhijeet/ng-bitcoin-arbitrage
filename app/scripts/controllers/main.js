'use strict';


function update ($scope, $http) {
  $http.get('http://192.168.1.124:5000/bitcoin-arbitrage/api/v1.0/opportunities').success(function(data) {
    $scope.opportunities = data.opportunities;
    $scope.chartObject = {};

    var rows = [];

    for(var oppIdx in $scope.opportunities) {
      var opp = $scope.opportunities[oppIdx];
      rows.push(
        {c: [
          {v: (opp.kbid ) + ' / ' + (opp.kask)},
          {v: opp.profit },
          {v: numeral(opp.profit).format('$0.00') }
          ]}
      )
    }
    
    $scope.chartObject.data = {'cols': [
        {id: 't', label: 'Topping', type: 'string'},
        {id: 's', label: 'Profit ', type: 'number', prefix:'$', p: {}},
        
      ], 'rows': rows};
    
    
    // $routeParams.chartType == BarChart or PieChart or ColumnChart...
    $scope.chartObject.type = "BarChart";
    // $scope.chartObject.options = {
    //     'title': 'How Much Pizza I Ate Last Night'
    // }
  });
}

angular.module('ngBitcoinArbitrageApp')
  .controller('MainCtrl', function ($scope, $http, $log) {
    update($scope, $http);
    setInterval(function() {
      update($scope, $http);
    }, 10000);
  });
  

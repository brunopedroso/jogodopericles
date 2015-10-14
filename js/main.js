
var app = angular.module('minhaApp',[]);

app.controller('MeuController', ['$scope', function($scope) {
  $scope.cells = []
  $scope.numbers = []
  $scope.letters = []
  for(var i=0; i<10 ; i++){
    $scope.cells[i] = []
    $scope.numbers[i] = 0
    $scope.letters[i] = ''
    for(var j=0; j<5 ; j++){
      $scope.cells[i][j] = {v:0};
    }
  }
  
  $scope.click = function(td) {
    td.v = (td.v + 1) % 2;
  }
  
  $scope.$watch('cells', function(cell, a, b, c) {
    
    for(var i=0 ; i<$scope.cells.length ; i++) {
      $scope.numbers[i] = 0;
      for(var j=0 ; j<$scope.cells[i].length ; j++) {
        $scope.numbers[i] += $scope.cells[i][j].v * Math.pow(2,(4-j));
      }
      
      if ($scope.numbers[i] == 0 || $scope.numbers[i] > 26) {
        $scope.letters[i] = ''
      } else {
        $scope.letters[i] = String.fromCharCode( 'a'.charCodeAt(0) - 1 + $scope.numbers[i]) 
      }
      
        
    }
      
  }, true)
  
}]);

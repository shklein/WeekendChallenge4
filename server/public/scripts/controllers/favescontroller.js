myApp.controller('FavesController', ['$scope', '$http', 'DataFactory',  function($scope, $http, DataFactory)

{
  $scope.dataFactory = DataFactory;
  $scope.faves = [];
  $scope.counter = 0;

  if ($scope.dataFactory.factoryGetFavorites() === undefined) {
    $scope.dataFactory.factoryRefreshFavoriteData().then(function() {
      $scope.faves = $scope.dataFactory.factoryGetFavorites();
      $scope.counter = $scope.faves.length;
    });
  } else {
    $scope.faves = $scope.dataFactory.factoryGetFavorites();
    $scope.counter = $scope.faves.length;
  }

}]);

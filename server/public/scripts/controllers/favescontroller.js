myApp.controller('FavesController', ['$scope', '$http', function($scope, $http)

{
  $scope.faves = [];
  $scope.count = 0;
  $scope.counter = 0;

  getFaves();

  function getFaves() {
      $http.get('/pets')
        .then(function (response) {
          response.data.forEach(function (pet) {

          });

          $scope.faves = response.data;
          $scope.count = $scope.faves.length
          $scope.counter = function () {
            if ($scope.count == 1) {
        $scope.counter = 'You have' + $scope.count + 'favorite.';
        } else {
        $scope.counter = 'You have' + $scope.count + 'favorites.';
      }
        return $scope.count;
        return $scope.counter;
        }
        });


    }


}]);

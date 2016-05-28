myApp.controller('FavesController', ['$scope', '$http', function($scope, $http)

{
  $scope.faves = [];

  getFaves();

  function getFaves() {
      $http.get('/pets')
        .then(function (response) {
          response.data.forEach(function (pet) {

          });

          $scope.faves = response.data;
          console.log('GET /pets ', response.data);

        });

    }

}]);

myApp.controller('CountController', ['$scope', '$http', function($scope, $http)

{
  $scope.faves = [];
  $scope.counter = 0;

  getFaves();

  function getFaves() {
      $http.get('/pets')
        .then(function (response) {
          response.data.forEach(function (pet) {

          });

          $scope.faves = response.data;
          console.log('GET /pets ', response.data);
          $scope.counter = $scope.faves.length
        });


    }


}]);

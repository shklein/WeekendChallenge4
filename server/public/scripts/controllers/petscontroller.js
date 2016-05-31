myApp.controller('PetsController', ['$scope', '$http', function($scope, $http)

{
  var key = 'f36fcd38aad43d04c6b9042c01e91da5';
  var baseURL = 'http://api.petfinder.com/';

  $scope.pets = ["barnyard", "bird", "cat", "dog", "horse", "pig", "reptile", "smallfurry"];
  $scope.faves = [];
  $scope.currentPet = {};
  $scope.counter = 0;

getFaves();

  $scope.getRandomPet = function() {

    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=' + $scope.selectedPet;
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        $scope.animal = response.data.petfinder.pet;
        $scope.currentPet = {
          petID: $scope.animal.id.$t,
          petName: $scope.animal.name.$t,
          imageURL: $scope.animal.media.photos.photo[3].$t,
          description: $scope.animal.description.$t.substr(0,100),
          petBreed: $scope.animal.breeds.breed.$t
        }

        return $scope.currentPet;

      }

    )

  }


  $scope.faveCurrentPet = function () {
    var data = $scope.currentPet;
    $http.post('/pets', data)
      .then(function () {
        console.log('POST /pets');
        getFaves();
      });



  };


    function getFaves() {
        $http.get('/pets')
          .then(function (response) {
            response.data.forEach(function (pet) {

            });

            $scope.faves = response.data;
            $scope.counter = $scope.faves.length
          });


      }

}]);

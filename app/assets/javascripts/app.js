var app = angular.module('app', ['ui.router', 'templates'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('recipes');

    $stateProvider
      .state('recipes', {
        url: '/recipes',
        templateUrl: 'templates/_recipes.html'
      })
      .state('recipe',{
        url: '/recipes/{id}',
        templateUrl: 'templates/_recipe.html',
        controller: function($scope, $stateParams, recipes){
            $scope.recipe = recipes.recipes[$stateParams.id];
          }
      });

  })
.factory('recipes', ['$http', function($http){
    var o ={
      recipes: []
    };

    o.getAll = function() {
      return $http.get('/recipes.json').success(function(data){
        angular.copy(data, o.recipes);
      });
    };

    o.create = function(recipe) {
      return $http.post('/recipes.json', recipe).success(function(data){
        o.recipes.push(data);
      });
    };
    return o;
  }]);

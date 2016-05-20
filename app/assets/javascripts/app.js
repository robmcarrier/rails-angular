var app = angular.module('app', ['ui.router', 'templates'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('recipes');

    $stateProvider
      .state('recipes', {
        url: '/recipes',
        templateUrl: 'templates/_recipes.html',
        resolve: {
          postPromise: ['recipes', function(recipes){
            return recipes.getAll();
          }]
        }
      })
      .state('recipe',{
        url: '/recipes/{id}',
        templateUrl: 'templates/_recipe.html',
        controller: function($scope, $stateParams, $http){

          $http.get('./recipes/'+ (parseInt($stateParams.id) + 1) + '.json').success(function(data){
            $scope.recipe = data;
          })}
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
    o.get = function(id) {
  		return $http.get('/recipes/' + id + '.json').then(function(result){
  			return result.data;
  		});
  	};


    o.create = function(recipe) {
      return $http.post('/recipes.json', recipe).success(function(data){
        o.recipes.push(data);
      });
    };
    return o;
  }])

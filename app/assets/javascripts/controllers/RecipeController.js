function RecipeController($scope, $http, recipes){
  $scope.recipes = [];

  $http.get('./recipes.json').success(function(data) {
    return $scope.recipes = data
  })

  $scope.viewRecipe = function(id){
    $recipe.url("/recipes/" + id);
  };

  recipes.recipes = $scope.recipes;

  $scope.addRecipe = function(){
    if(!$scope.name || $scope.name === ""){return;}
    if(!$scope.category || $scope.category === ""){return;}
    if(!$scope.ingredients || $scope.ingredients[0].name === ""){return;}
    recipes.create({
      name: $scope.name,
      category: $scope.category,
      ingredients: $scope.ingredients
    });
    $http.get('./recipes.json').success(function(data) {
      return $scope.recipes = data
    })
    $scope.name = "";
    $scope.ingredients = [{}];
    $scope.category = "";
  }

  $scope.ingredients = [{}];

  $scope.isHidden = false;

  $scope.breakHide = false;

  $scope.lunchHide = false;

  $scope.addIngredient = function(){

    $scope.ingredients.push({});
  }
}

angular
  .module('app')
  .controller('RecipeController', RecipeController);

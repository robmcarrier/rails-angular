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
      ingredients: $scope.ingredients,
      category: $scope.category
    });
    recipes.recipes = $scope.recipes;
    $scope.name = "";
    $scope.ingredients = [{name: ""}];
    $scope.category = "";
  }

  $scope.ingredients = [{name: ""}];

  $scope.isHidden = false;

  $scope.breakHide = false;

  $scope.lunchHide = false;

  $scope.addIngredient = function(){

    $scope.ingredients.push({name: ""});
  }
}

angular
  .module('app')
  .controller('RecipeController', RecipeController);

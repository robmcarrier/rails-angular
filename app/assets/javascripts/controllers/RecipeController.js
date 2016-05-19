function RecipeController($scope, recipes){
  $scope.recipes = [{name: "test", category: "breakfast", upvote: 0, ingredients: [
    {name: "taco"},
    {name: "meat"}]}, {name: "tsdsfest", category: "breakfast", upvote: 4, ingredients: [{name: "taco"}, {name: "meat"}]}, {name: "tacos", upvote: 5, category: "lunch", ingredients: [{name: "taco"}, {name: "meat"}]}];

  recipes.recipes = $scope.recipes;

  $scope.addRecipe = function(){
    if(!$scope.name || $scope.name === ""){return;}
    if(!$scope.category || $scope.category === ""){return;}
    if(!$scope.ingredients || $scope.ingredients[0].name === ""){return;}
    recipes.create({
      name: $scope.name,
      ingredients: $scope.ingredients,
      category: $scope.category,
      upvote: 0
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

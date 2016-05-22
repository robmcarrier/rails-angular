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

  $scope.editRecipe = function(){
    recipe.update({
      name: $scope.name,
      category: $scope.category,
      ingredients: $scope.ingredients
    });
    $http.put('./recipes.json').success(function(data) {
      return $scope.recipes = data
    })
  }
  $scope.breakClass = "glyphicon glyphicon-menu-down"

  $scope.changeBreak = function(){
    if($scope.breakClass === "glyphicon glyphicon-menu-down"){
      $scope.breakClass = "glyphicon glyphicon-menu-up";

    } else {
      $scope.breakClass = "glyphicon glyphicon-menu-down";
    };
  };

  $scope.ingredients = [{}];
  $scope.isHidden = false;
  $scope.breakHide = false;
  $scope.lunchHide = false;
  $scope.dinnerHide = false;
  $scope.sweetHide = false;
  $scope.otherHide = false;

  $scope.addIngredient = function(){

    $scope.ingredients.push({});
  }
}

angular
  .module('app')
  .controller('RecipeController', RecipeController);

class IngredientsController < ApplicationController

  def create
    recipe = Recipe.find(params[:recipe_id])
    ingredient = recipe.ingredients.create(ingredient_params)
    respond_with recipe, ingredient
  end

  def show
    respond_with Ingredient.find(params[:id])
  end

  private

  def ingredient_params
    params.require(:ingredients).permit!
  end
end

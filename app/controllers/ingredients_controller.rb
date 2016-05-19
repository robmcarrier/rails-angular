class IngredientsController < ApplicationController

  def create
    recipe = Recipe.find(params[:recipe_id])
    ingredient = recipe.ingredients.create(ingredient_params)
    respond_with recipe, ingredient
  end

  private

  def ingredient_params
    params.require(:ingredient).permit(:name)
  end
end

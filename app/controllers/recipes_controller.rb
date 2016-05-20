class RecipesController < ApplicationController


  def index
    respond_with Recipe.all
  end

  def show
    respond_with Recipe.find(params[:id])
  end

  def create
    respond_with Recipe.create(recipe_params)
    ingredient = recipe.ingredients.build(params[:ingredients])
    

  end

  private

  def recipe_params
    params.require(:recipe).permit(:name, :ingredients, :category)
  end


end

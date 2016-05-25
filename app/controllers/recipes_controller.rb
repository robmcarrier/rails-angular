class RecipesController < ApplicationController


  def index
    respond_with Recipe.all
  end

  def show
    respond_with Recipe.find(params[:id])
  end

  def create
    @recipe = Recipe.create(recipe_params)
    newStuff = params[:ingredients]
    i = 0
    while i < newStuff.length
      ingredient = Ingredient.new
      ingredient.name = params[:ingredients][i][:name]
      @recipe.ingredients << ingredient
      i += 1
    end
    @recipe.save
    respond_with @recipe
  end

  def update
    respond_with recipe.update_attributes(recipe_params)
  end

  private

  def recipe_params
    params.require(:recipe).permit!
  end


end

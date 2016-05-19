class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :category
      t.integer :upvotes

      t.timestamps null: false
    end
  end
end

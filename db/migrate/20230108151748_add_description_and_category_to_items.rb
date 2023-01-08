class AddDescriptionAndCategoryToItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :category, :string
    add_column :items, :description, :string
    add_column :artifacts, :description, :string
  end
end

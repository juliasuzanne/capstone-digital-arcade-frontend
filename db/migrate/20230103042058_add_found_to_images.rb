class AddFoundToImages < ActiveRecord::Migration[7.0]
  def change
    add_column :images, :found, :boolean
  end
end

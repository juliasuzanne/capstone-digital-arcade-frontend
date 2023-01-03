class RenameImagesTable < ActiveRecord::Migration[7.0]
  def change
    rename_table :find_images_games, :images
  end
end

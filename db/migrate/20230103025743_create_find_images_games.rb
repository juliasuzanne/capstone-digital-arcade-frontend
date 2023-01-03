class CreateFindImagesGames < ActiveRecord::Migration[7.0]
  def change
    create_table :find_images_games do |t|
      t.string :image_url
      t.integer :points
      t.integer :posx
      t.integer :posy
      t.string :name

      t.timestamps
    end
  end
end

class CreateArtifacts < ActiveRecord::Migration[7.0]
  def change
    create_table :artifacts do |t|
      t.integer :price_in_points
      t.string :image_url

      t.timestamps
    end
  end
end

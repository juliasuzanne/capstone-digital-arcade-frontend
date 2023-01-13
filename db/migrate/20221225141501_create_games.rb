class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :title
      t.integer :high_scorer_id
      t.integer :points_earned
      t.integer :user_previous_high_score
      t.string :image_url
      t.timestamps
    end
  end
end

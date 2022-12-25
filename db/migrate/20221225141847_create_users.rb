class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.integer :points
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :image_url

      t.timestamps
    end
  end
end

class AddFixedWiresToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :fixed, :bool, :default => false
  end
end

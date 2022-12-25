class Artifact < ApplicationRecord
  validates :price_in_points, presence: true
  validates :image_url, presence: true

  belongs_to :user
end

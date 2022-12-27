class Artifact < ApplicationRecord
  belongs_to :user

  validates :price_in_points, presence: true
  validates :image_url, presence: true
end

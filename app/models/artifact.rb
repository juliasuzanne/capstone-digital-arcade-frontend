class Artifact < ApplicationRecord
  belongs_to :user

  validates :price_in_points, presence: true
  validates :image_url, presence: true

  def is_affordable(user_variable)
    if price_in_points <= user_variable.points
      return true
    else
      return false
    end
  end

  def is_claimed
    if user_id
      return true
    else
      return false
    end
  end
end

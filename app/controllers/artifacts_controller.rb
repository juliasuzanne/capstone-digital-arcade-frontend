class ArtifactsController < ApplicationController
  def index
    @artifacts = Artifact.where(user_id: current_user.id)
    render template: "artifacts/index"
    # render json: artifacts.as_json
  end

  def all
    artifacts = Artifact.all.where(user_id: nil)
    render json: artifacts.as_json
  end

  def create
    artifact = Artifact.new(
      user_id: current_user.id,
      price_in_points: params[:price_in_points],
      image_url: params[:image_url],
      name: params[:name],
    )
    if artifact.save
      render json: { message: "Artifact created successfully" }, status: :created
    else
      render json: { errors: artifact.errors.full_messages }, status: :bad_request
    end
  end

  def update
    artifact = Artifact.find(params[:id])

    if artifact.is_claimed == true
      render json: {
        message: "Artifact unavailable for purchase",
      }
    elsif artifact.is_affordable(current_user) == false
      render json: {
        message: "You do not have enough points to purchase this item",
      }
    else
      artifact.user_id = current_user.id
      if artifact.save
        render json: artifact.as_json
      else
        render json: { errors: artifact.errors.full_messages }
      end
    end
  end
end

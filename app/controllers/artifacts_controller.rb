class ArtifactsController < ApplicationController
  def index
    @artifacts = Artifact.where(user_id: current_user.id)
    render template: "artifacts/index"
    # render json: artifacts.as_json
  end

  def all
    artifacts = Artifact.all
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
end

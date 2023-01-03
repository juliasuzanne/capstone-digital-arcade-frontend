class ImagesController < ApplicationController
  def index
    images = Image.all
    render json: images.as_json
    # render json: artifacts.as_json
  end

  def create
    image = Image.new(
      image_url: params[:image_url],
      points: params[:points],
      name: params[:name],
      posx: params[:posx],
      posy: params[:posy],
    )

    if image.save
      render json: { message: "Artifact created successfully" }, status: :created
    else
      render json: { errors: image.errors.full_messages }, status: :bad_request
    end
  end
end

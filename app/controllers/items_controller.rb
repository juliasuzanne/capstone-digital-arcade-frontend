class ItemsController < ApplicationController
  def index
    items = Item.all
    render json: items.as_json
  end

  def create
    item = Item.new(image_url: params[:image_url])
    if item.save
      render json: { message: "Item created successfully." }, status: :created
    else
      render json: { errors: item.errors.full_messages }, status: :bad_request
    end
  end

  def update
    item = Item.find(params[:id])
    item.image_url = params[:image_url]
    if item.save
      render json: item
    else
      render json: { errors: item.errors.full_messages }, status: :bad_request
    end
  end

  def show
    item = Item.find(params[:id])
    render json: item.as_json
  end

  def destroy
    item = Item.find(params[:id])
    item.destroy
  end
end

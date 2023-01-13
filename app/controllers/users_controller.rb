class UsersController < ApplicationController
  def create
    user = User.new(
      name: params[:name],
      email: params[:email],
      image_url: params[:image_url],
      password: params[:password],
      password_confirmation: params[:password_confirmation],
    )
    if user.save
      render json: { message: "User created successfully" }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :bad_request
    end
  end

  def update
    user = User.find_by(id: current_user.id)
    user.points = params[:points] || user.points
    user.name = params[:name] || user.name
    user.fixed = params[:fixed] || user.fixed
    user.email = params[:email] || user.email
    if user.save
      render json: user
    else
      render json: { errors: user.errors.full_messages }, status: :bad_request
    end
  end

  def index
    user = User.find_by(id: current_user.id)
    render json: user
  end
end

class UsersController < ApplicationController

  require 'net/http'

  def show
    @user = User.find(params[:id])
    @description = @user.description
    @default_url = 'http://coastalhomes.ie/wp-content/uploads/2016/01/no.jpg'

    @marker = Marker.where(user_id: @user.id)
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      redirect_to map_path
    else
      redirect_to signup_path
    end
  end

  def update
      current_user = User.find(params[:id])
      current_user.update(user_params)
      current_user.save
      redirect_to user_path
  end

  def destroy
    current_user.avatar = nil
    current_user.save
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :description, :avatar, :password, :password_confirmation)
    end
  end

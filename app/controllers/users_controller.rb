class UsersController < ApplicationController

  require 'net/http'

  def show
    @user = User.find(params[:id])
    @description = @user.description
    @default_url = 'https://68.media.tumblr.com/2b9981e351c7edd34c937abb5566fb03/tumblr_ob5pgtJ6hD1ut5l79o1_500.jpg'

    @marker = Marker.where(user_id: @user.id)
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      redirect_to map_path
    else
      flash[:notice] = 'Error with signup. Please try again.'
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

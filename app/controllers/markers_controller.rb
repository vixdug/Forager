class MarkersController < ApplicationController


  def new
    @marker = Marker.new
  end

  def create

    @marker = Marker.new(marker_params)
    if @marker.save
      render :json => @marker
    else
      render :json => {error: 'errors'}
    end
  end


def index
   @marker = Marker.all.order(created_at: :desc)
 end

 def upvote
  @marker = Marker.find(params[:id])
  @marker.upvote_from current_user
  redirect_to map_path
 end

 def downvote
   @marker = Marker.find params[:id]
   @marker.downvote_from current_user
   redirect_to map_path
 end


private
  def marker_params
    params.require(:marker).permit(:name, :address, :latitude, :longitude, :category)
  end


end

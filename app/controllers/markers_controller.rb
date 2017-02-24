class MarkersController < ApplicationController
  def index
  end

  def new
    @marker = Marker.new
  end

  def create


    @marker = Marker.new(marker_params)
    if @marker.save
      flash[:success] = "Saved"
      render :json => @marker
    else
      flash[:danger] = "no"
      render :json => {yo: 'mamma'}
    end
  end

private
def marker_params
  params.require(:marker).permit(:name, :address, :latitude, :longitude, :type)
end


end

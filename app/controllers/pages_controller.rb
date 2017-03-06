require 'date'

class PagesController < ApplicationController

  def home
    @date = Date.today
    end

  def map
@marker = Marker.all
  end

  def community
    end

end

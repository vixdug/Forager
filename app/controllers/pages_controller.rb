require 'date'
class PagesController < ApplicationController

  # before_action :season, only: [:home]


  def home
@date = Date.today

    end

  def map
@marker = Marker.all
  end

  def community
    end




end

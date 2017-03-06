require 'date'
class PagesController < ApplicationController

  # before_action :season, only: [:home]


  def home

    end

  def map
@marker = Marker.all
  end

  def community
    end


    class Date

      def season
        day_hash = month * 100 + mday
        case day_hash
          when 101..401 then :winter
          when 402..630 then :spring
          when 701..930 then :summer
          when 1001..1231 then :fall
        end
      end
    end

end

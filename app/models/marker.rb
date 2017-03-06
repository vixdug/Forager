class Marker < ActiveRecord::Base
acts_as_votable
  # default_scope order('id DESC')
end

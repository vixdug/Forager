class User < ApplicationRecord
  acts_as_voter
  has_secure_password
  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>"}, default_url: "http://coastalhomes.ie/wp-content/uploads/2016/01/no.jpg"
validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/
end

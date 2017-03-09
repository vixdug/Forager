class User < ApplicationRecord
  acts_as_voter
  has_secure_password
  has_many :posts
  has_many :comments

  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "https://68.media.tumblr.com/2b9981e351c7edd34c937abb5566fb03/tumblr_ob5pgtJ6hD1ut5l79o1_500.jpg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/
  end

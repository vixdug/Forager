module ApplicationHelper

  def gravatar_url(email,size)
    gravatar = Digest::MD5::hexdigest(email).downcase
    url = "http://gravatar.com/avatar/#{gravatar}.png?s=#{size}d=http://semantic-ui.com/images/avatar2/large/kristy.png"
  end 
end

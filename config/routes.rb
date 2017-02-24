Rails.application.routes.draw do

  root to: 'pages#home'
  get "/map", to: 'pages#map'
  # resources :pages, only: :create, as: "map"

  # post "/markers", to: 'pages#map'
  resources :markers, only: ['create']




  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

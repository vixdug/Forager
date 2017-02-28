Rails.application.routes.draw do

  root to: 'pages#home'
  get "/map", to: 'pages#map'
  get "/community", to: 'pages#community'

  # resources :pages, only: :create, as: "map"

  # post "/markers", to: 'pages#map'
  resources :markers, only: [:create, :index]
  # resources :markers
  # get "markers/index"

  get '/signup' => 'users#new'

  resources :users,  only: [:create, :show, :update]

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

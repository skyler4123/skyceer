require 'sidekiq/web'
require 'sidekiq/cron/web'
Sidekiq::Web.use(Rack::Auth::Basic) do |user, password|
  [user, password] == [Constants::SIDEKIQ_UI_USER, Constants::SIDEKIQ_UI_PASSWORD]
end

Rails.application.routes.draw do
  resources :bloggers
  resources :laptops
  mount Sidekiq::Web => "/sidekiq" # mount Sidekiq::Web in your Rails app

  resources :comments
  resources :posts
  get 'signin', to: 'sessions#new'
  post 'signin', to: 'sessions#create'
  delete 'signout', to: 'sessions#destroy'
  get 'signup', to: 'users#new'
  resources :demos
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  get "/up", to: Proc.new { [200, {}, ["OK"]] }
  root "demos#index"
end

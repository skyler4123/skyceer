require 'sidekiq/web'
require 'sidekiq/cron/web'
Sidekiq::Web.use(Rack::Auth::Basic) do |user, password|
  [user, password] == [Constants::SIDEKIQ_UI_USER, Constants::SIDEKIQ_UI_PASSWORD]
end

Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  mount RailsMiniProfiler::Engine => '/rails_mini_profiler'
  resources :chat_rooms
  resources :chat_messages
  resources :chat_users
  resources :demos
  post 'images/upload_by_file'
  post 'images/upload_by_url'
  mount Sidekiq::Web => "/sidekiq" # mount Sidekiq::Web in your Rails app
  
  # MongoDB 
  resources :blogs
  resources :blog_users

  # PostgreSQL
  resources :laptops
  resources :comments
  resources :posts
  get 'signin', to: 'sessions#new'
  post 'signin', to: 'sessions#create'
  delete 'signout', to: 'sessions#destroy'
  get 'signup', to: 'users#new'
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  get "/up", to: Proc.new { [200, {}, ["OK"]] }
  root "demos#index"

  namespace :api do
    resources :users
  end
end

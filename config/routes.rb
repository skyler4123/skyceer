require 'sidekiq/web'
require 'sidekiq/cron/web'
Sidekiq::Web.use(Rack::Auth::Basic) do |user, password|
  [user, password] == [Constants::SIDEKIQ_UI_USER, Constants::SIDEKIQ_UI_PASSWORD]
end

Rails.application.routes.draw do
  resources :demo, only: [:index, :new]

  resources :map_locations
  resources :map_users

  # AGRICULTURE packge
  resources :agriculture_merchants
  resources :agriculture_farms
  resources :agriculture_farmers
  resources :agriculture_users

  # EDUCATION package
  resources :education_rooms
  resources :education_classes
  resources :education_students
  resources :education_teachers
  resources :education_schools
  resources :education_users

  # CALENDAR package
  resources :calendar_schedules
  resources :calendar_events
  resources :calendar_users

  # CHAT package
  resources :chat_conversations
  resources :chat_messages
  resources :chat_users

  resources :components
  get  "sign_in", to: "sessions#new"
  post "sign_in", to: "sessions#create"
  get  "sign_up", to: "registrations#new"
  post "sign_up", to: "registrations#create"
  resources :sessions, only: [:index, :show, :destroy]
  resource  :password, only: [:edit, :update]
  namespace :identity do
    resource :email,              only: [:edit, :update]
    resource :email_verification, only: [:show, :create]
    resource :password_reset,     only: [:new, :edit, :create, :update]
  end

  # HOME for packages
  get  "about", to: "home#about"
  get  "agriculture", to: "home#agriculture"
  get  "education", to: "home#education"
  get  "home", to: "home#index"
  
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  post 'images/upload_by_file'
  post 'images/upload_by_url'
  mount Sidekiq::Web => "/sidekiq" # mount Sidekiq::Web in your Rails app
  get "/up", to: Proc.new { [200, {}, ["OK"]] }
  # get "up" => "rails/health#show", as: :rails_health_check

  root "home#index"
end

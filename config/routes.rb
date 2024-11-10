# require 'sidekiq/web'
# require 'sidekiq/cron/web'
# Sidekiq::Web.use(Rack::Auth::Basic) do |user, password|
#   [user, password] == [SIDEKIQ_UI_USER, SIDEKIQ_UI_PASSWORD]
# end

Rails.application.routes.draw do
  resources :categories
  # EDUCATION package
  resources :education_rooms
  resources :education_students
  resources :education_teachers
  resources :education_schools
  resources :education_classes

  # REPORT
  resources :report_frontends
  resources :report_tickets

  resources :addresses
  
  # ESTATE
  resources :estate_houses
  resources :estate_hotels
  resources :estate_condos
  resources :estate_users

  # ARTICLE
  resources :article_comments
  resources :article_users
  resources :article_posts

  resources :users do
    collection do
      get :profile
    end
  end
  resources :vehicle_stores
  resources :vehicle_cars
  resources :vehicle_brands
  resources :vehicle_users
  mount MissionControl::Jobs::Engine, at: "/jobs"
  resources :demo, only: [:index, :new]

  # CALENDAR package
  resources :calendar_events
  resources :calendar_groups

  # CHAT package
  resources :chat_conversations do
    collection do
      get :box
    end
  end
  resources :chat_messages
  resources :chat_users do
    collection do
      get :host
    end
  end

  get  "sign_in", to: "sessions#new"
  post "sign_in", to: "sessions#create"
  get "sign_out", to: "sessions#sign_out"
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
  resources :images, only: [] do
    collection do
      post :editorjs_upload_by_file
      post :editorjs_upload_by_url
    end
  end
  # mount Sidekiq::Web => "/sidekiq" # mount Sidekiq::Web in your Rails app
  get "/up", to: Proc.new { [200, {}, ["OK"]] }
  # get "up" => "rails/health#show", as: :rails_health_check

  root "home#index"
end

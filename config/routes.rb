# require 'sidekiq/web'
# require 'sidekiq/cron/web'
# Sidekiq::Web.use(Rack::Auth::Basic) do |user, password|
#   [user, password] == [SIDEKIQ_UI_USER, SIDEKIQ_UI_PASSWORD]
# end

Rails.application.routes.draw do
  resources :payment_method_appointments
  resources :payment_item_appointments
  resources :payment_logs
  resources :payment_invoices
  resources :payment_orders
  resources :payment_items
  resources :payment_discounts
  resources :payment_methods
  resources :payment_users

  resources :categories

  # EDUCATION package
  resources :education_schools do
    scope module: :education_schools do
      resources :education_teachers
      resources :education_students
      resources :education_courses
      resources :education_rooms
      resources :education_classes
      resources :education_categories do
        collection do
          get :select
        end
      end
      resources :education_exam_questions
      resources :education_questions
      resources :education_exams
      resources :education_subjects
    end
    member do
      get :education_schools
    end
  end
  resources :educations, only: [:index]
  resources :education_courses
  resources :education_rooms
  resources :education_classes
  resources :education_teachers
  resources :education_students
  resources :education_categories
  resources :education_exam_questions
  resources :education_questions
  resources :education_exams
  resources :education_subjects
  resources :education_subject_appointments
  resources :education_question_appointments
  resources :education_category_appointments
  resources :education_class_appointments
  resources :education_class_room_appointments
  resources :education_question_appointments
  resources :education_shifts
  resources :education_lessons



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

  resources :vehicle_stores
  resources :vehicle_cars
  resources :vehicle_brands
  resources :vehicle_users
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


  resources :images, only: [] do
    collection do
      post :editorjs_upload_by_file
      post :editorjs_upload_by_url
    end
  end

  resources :users

  # Default routes
  # mount Sidekiq::Web => "/sidekiq" # mount Sidekiq::Web in your Rails app
  mount MissionControl::Jobs::Engine, at: "/jobs"
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  
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
  root "home#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  # get "/up", to: Proc.new { [200, {}, ["OK"]] }

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  # root "posts#index"
end

Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check
  resources :demo, only: [:index, :new]
  resources :images, only: [] do
    collection do
      post :editorjs_upload_by_file
      post :editorjs_upload_by_url
    end
  end
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

  # draw for app routes
  draw(:education) if APP_NAME == "education"

end

require 'sidekiq/web'
require 'sidekiq/cron/web'
Sidekiq::Web.use(Rack::Auth::Basic) do |user, password|
  [user, password] == [Constants::SIDEKIQ_UI_USER, Constants::SIDEKIQ_UI_PASSWORD]
end

Rails.application.routes.draw do
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
  root "home#index"
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  mount RailsMiniProfiler::Engine => '/rails_mini_profiler'
  resources :demos
  post 'images/upload_by_file'
  post 'images/upload_by_url'
  mount Sidekiq::Web => "/sidekiq" # mount Sidekiq::Web in your Rails app
  get "/up", to: Proc.new { [200, {}, ["OK"]] }

end

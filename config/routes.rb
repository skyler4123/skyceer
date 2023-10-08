Rails.application.routes.draw do
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


class EducationRoleConstraint
  def initialize(education_role)
    @education_role = education_role
  end

  def matches?(request)
    education_role = request.cookies["education_role"]
    case education_role.to_sym
    when :education_school
      return true if @education_role == :education_school
    when :education_admin
      return true if @education_role == :education_admin
    when :education_teacher
      return true if @education_role == :education_teacher
    when :education_student
      return true if @education_role == :education_student
    else
      false
    end
  end
end

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
    resources :project_category_appointments
    resources :project_categories
    resources :project_subtask_appointments
    resources :project_subtasks
    resources :project_task_appointments
    resources :project_tasks
    resources :project_group_appointments
    resources :project_groups
    end
  end
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
  resources :users, only: [:index, :show, :update] do
    member do
      get :profile
    end
  end

  # draw for app routes
  draw(:education) if APP_NAME == "education"

end

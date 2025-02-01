class EducationsController < ApplicationController
  before_action :redirect_when_not_education_user, only: [:index]

  # education_schools_path can be different base on the user role, use it as second landing page
  def index
    redirect_to education_schools_path
  end

  def home
  end

  private
  # Redirect when user is not education user
  def redirect_when_not_education_user
    return redirect_to root_path unless current_user.is_education_user
  end
end

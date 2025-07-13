class EducationsController < ApplicationController
  skip_before_action :authenticate, only: [:home]
  before_action :redirect_when_not_education_user, only: [:index]

  # education_schools_path can be different base on the user role, use it as second landing page
  def index
    redirect_to education_schools_path
  end

  def home
  end

  private

  def set_package_name
    @package_name = :education
  end

  # Redirect when user is not education user
  def redirect_when_not_education_user
    render_not_found unless current_user.is_education_user
  end
end

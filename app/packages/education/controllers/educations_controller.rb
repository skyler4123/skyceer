class EducationsController < ApplicationController
  before_action :redirect_to_not_education_user

  def index
    return redirect_to education_schools_path
  end

  private
  def set_education_schools
    return @education_schools = EducationSchool.joins(:education_admins).where(education_admins: current_user.education_admins) if current_user.education_role == "admin"
    @education_schools = current_user.education_schools
  end

  # Redirect when user is not education user
  def redirect_to_not_education_user
    return redirect_to root_path unless current_user.is_education_user
  end
end

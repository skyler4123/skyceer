class EducationsController < ApplicationController

  def index
    return redirect_to education_schools_path
  end

  private
  def set_education_schools
    return @education_schools = EducationSchool.joins(:education_admins).where(education_admins: current_user.education_admins) if current_user.education_role == "admin"
    @education_schools = current_user.education_schools
  end
end

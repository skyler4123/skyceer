class EducationsController < ApplicationController
  before_action :redirect_to_not_education_user
  before_action :set_education_schools

  def index
    return redirect_to education_schools_path
  end

  private
  def set_education_schools
    # return @education_schools = EducationSchool.joins(:education_admins).where(education_admins: current_user.education_admins) if current_user.education_role == "admin"
    # @education_schools = current_user.education_schools
    case current_user.education_role.to_sym
    when :admin
      @education_schools = EducationSchool.joins(:education_admins).where(education_admins: current_user.education_admins)
    when :teacher
      @education_schools = EducationSchool.joins(:education_teachers).where(education_teachers: current_user.education_teachers)
    when :student
      @education_schools = EducationSchool.joins(:education_students).where(education_students: current_user.education_students)
    else
      @education_schools = current_user.education_schools
    end
  end

  # Redirect when user is not education user
  def redirect_to_not_education_user
    return redirect_to root_path unless current_user.is_education_user
  end
end

class EducationsController < ApplicationController
  def index
    return redirect_to education_schools_path if Current.current_user.admin?
    case Current.education_role.to_sym
    when :school
      redirect_to education_school_education_schools_path
    # when :teacher
    #   redirect_to education_teacher_education_schools_path
    # when :student
    #   redirect_to education_student_education_schools_path
    else
      redirect_to root_path
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_education_school
    @education_school = EducationSchool.find(params[:education_school_id])
  end

  def set_education_student
    @education_school = EducationStudent.find(params[:education_student_id])
  end
end

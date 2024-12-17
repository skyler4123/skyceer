class EducationsController < ApplicationController

  def index
    return redirect_to education_schools_path if Current.current_user.admin?
    case Current.education_role.to_sym
    when :school
      redirect_to education_school_path(Current.education_school)
    when :teacher
      redirect_to user_path(id: Current.user_id)
    when :student
      redirect_to user_path(id: Current.user_id)
    else
      redirect_to root_path
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_education_school
    @education_school = EducationSchool.find(params[:education_school_id])
  end

  def set_education_teacher
    @education_teacher = EducationTeacher.find(params[:education_teacher_id])
  end

  def set_education_student
    @education_student = EducationStudent.find(params[:education_student_id])
  end

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_education_student
    @education_school = EducationStudent.find(params[:education_student_id])
  end
end

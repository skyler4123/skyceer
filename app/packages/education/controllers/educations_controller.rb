class EducationsController < ApplicationController
  def index
    case Current.education_role.to_sym
    when :education_school
      redirect_to education_school_education_schools_path
    when :education_teacher
      redirect_to education_teacher_education_schools_path
    when :education_student
      redirect_to education_student_education_schools_path
    else
      redirect_to root_path
    end
  end
end

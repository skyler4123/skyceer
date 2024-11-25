class EducationsController < ApplicationController
  def index
    case Current.education_role.to_sym
    when :education_school
      education_school = EducationSchool.find_by(user_id: Current.user.id)
      redirect_to education_school_path(education_school)
    when :education_teacher
      education_teacher = EducationTeacher.find_by(user_id: Current.user.id)
      redirect_to education_teacher_path(education_school)
    when :education_student
      education_student = EducationStudent.find_by(user_id: Current.user.id)
      redirect_to education_student_path(education_school)
    else
      redirect_to root_path
    end
  end
end

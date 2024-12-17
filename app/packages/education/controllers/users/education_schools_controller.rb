class Users::EducationSchoolsController < EducationsController
  before_action :set_user

  # GET /education_schools or /education_schools.json
  def index
    if @user.education_role_student?
      @education_students = @user.education_students
      @education_schools = EducationSchool.includes(:education_students).where(education_students: @user.education_students)
    elsif @user.education_role_teacher?
      @education_teachers = @user.education_teachers
      @education_schools = EducationSchool.includes(:education_teachers).where(education_teachers: @user.education_teachers)
    end
  end
end

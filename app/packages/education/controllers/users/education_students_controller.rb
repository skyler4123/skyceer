class Users::EducationStudentsController < EducationsController
  before_action :set_user

  # GET /education_students or /education_students.json
  def index
    if @user.education_role == 'teacher'
      @education_schools = @user.education_teachers.map(&:education_school)
      @education_students = @education_schools.map(&:education_students).flatten
    elsif @user.education_role == 'student'
      @education_students = @user.education_students
    end
  end
end

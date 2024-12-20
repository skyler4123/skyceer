class Users::EducationTeachersController < EducationsController
  before_action :set_user

  # GET /education_teachers or /education_teachers.json
  def index
    if @user.education_role == 'teacher'
      @education_teachers = @user.education_teachers
    elsif @user.education_role == 'student'
      @education_teachers = @user.education_students.map(&:education_teachers).flatten
    end
  end
end

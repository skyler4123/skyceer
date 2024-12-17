class Users::EducationStudentsController < EducationsController
  before_action :set_user

  # GET /education_students or /education_students.json
  def index
    @education_students = @user.education_students.all
  end
end

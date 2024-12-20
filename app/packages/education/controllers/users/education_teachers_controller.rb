class Users::EducationTeachersController < EducationsController
  before_action :set_user

  # GET /education_teachers or /education_teachers.json
  def index
    @education_teachers = @user.education_teachers
  end
end

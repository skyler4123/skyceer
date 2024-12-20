class Users::EducationExamsController < EducationsController
  before_action :set_user

  # GET /education_exams or /education_exams.json
  def index
    @education_exams = @user.education_exams
  end

end

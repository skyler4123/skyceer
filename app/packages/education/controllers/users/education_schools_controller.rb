class Users::EducationSchoolsController < EducationsController
  before_action :set_user

  # GET /education_schools or /education_schools.json
  def index
    @education_schools = @user.education_schools
  end
end

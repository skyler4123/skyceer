class Users::CalendarsController < EducationsController
  before_action :set_user

  # GET /education_classes or /education_classes.json
  def index
    @education_classes = @user.education_classes
  end

end

class Users::EducationCoursesController < EducationsController
  before_action :set_user

  # GET /education_courses or /education_courses.json
  def index
    @education_courses = @user.education_courses
  end

end

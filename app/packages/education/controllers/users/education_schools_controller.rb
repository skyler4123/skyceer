class Users::EducationSchoolsController < EducationsController
  before_action :set_user, only: %i[ index ]
  skip_before_action :authorization, only: [:teachers]

  # GET /education_schools or /education_schools.json
  def index
    @education_students = @user.education_students
    @education_schools = EducationSchool.includes(:education_students).where(education_students: @user.education_students)
  end

  # GET /education_schools/1 or /education_schools/1.json
  def show
  end

end

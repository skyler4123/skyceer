class Users::EducationTeachersController < EducationsController
  before_action :set_user, only: %i[ index show ]
  before_action :set_education_teacher, only: %i[ show edit update destroy ]

  # GET /education_teachers or /education_teachers.json
  def index
    @education_teachers = @user.education_teachers.all
  end

  # GET /education_teachers/1 or /education_teachers/1.json
  def show
  end
end

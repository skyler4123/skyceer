class EducationSchoolsController < EducationsController
  skip_before_action :redirect_when_not_education_user, only: [:new, :create]

  # GET /education_schools/new
  def new
    @education_school = EducationSchool.new
  end

  # POST /education_schools or /education_schools.json
  def create
    @education_school = EducationSchool.new(education_school_params)
    @education_owner.education_ownerable = current_user

    respond_to do |format|
      if @education_school.save
        format.html { redirect_to @education_school, notice: CREATED_SUCCESS_MESSAGE }
        format.json { render :show, status: :created, location: @education_school }
      else
        format.html { redirect_to request.referer, error: "Education teacher was not created: #{@education_school.errors.full_messages}" }
        format.json { render json: @education_school.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def education_school_params
      params.expect(education_school: [:address_id, :name, :email])
    end
end

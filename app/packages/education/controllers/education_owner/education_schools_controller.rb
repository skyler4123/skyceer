class EducationOwner::EducationSchoolsController < EducationOwner::EducationsController
  before_action :set_education_school, only: %i[ edit update destroy education_schools]

  # GET /education_schools or /education_schools.json
  def index
    @pagination, @education_schools = pagy(@education_schools)
    @json_data = {
      education_schools: @education_schools.as_json(include: [:education_owner, :address]),
    }.to_json
  end

  # GET /education_schools/new
  def new
    @education_school = EducationSchool.new
  end

  # GET /education_schools/1/edit
  def edit
    @selected_categories = @education_school.education_categories
  end

  # POST /education_schools or /education_schools.json
  def create
    @education_school = EducationSchool.new(education_school_params)
    @education_school.user = current_user

    respond_to do |format|
      if @education_school.save
        if params[:education_school][:email].present?
          user = User.find_by(email: params[:education_school][:email])
          @education_school.user = user if user.present?
        end
        if params[:education_school][:education_category_id].present?
          education_categories = EducationCategory.where(id: params[:education_school][:education_category_id])
          @education_school.education_categories = education_categories
        end
        
        format.html { redirect_to education_schools_path, notice: CREATED_SUCCESS_MESSAGE }
        format.json { render :show, status: :created, location: @education_school }
      else
        format.html { redirect_to request.referer, error: "Education teacher was not created: #{@education_school.errors.full_messages}" }
        format.json { render json: @education_school.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_schools/1 or /education_schools/1.json
  def update
    respond_to do |format|
      if @education_school.update(education_school_params)
        if params[:education_school][:education_category_id].present?
          education_categories = EducationCategory.where(id: params[:education_school][:education_category_id])
          @education_school.education_categories = education_categories
        end

        format.html { redirect_to education_schools_path, notice: UPDATED_SUCCESS_MESSAGE }
        format.json { render :show, status: :ok, location: @education_school }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_school.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_schools/1 or /education_schools/1.json
  def destroy
    @education_school.destroy!

    respond_to do |format|
      format.html { redirect_to education_schools_path, status: :see_other, notice: DELETED_SUCCESS_MESSAGE }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_school
      @education_school = EducationSchool.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def education_school_params
      params.expect(education_school: [:name, :email])
    end
end

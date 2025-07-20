class EducationSchool::EducationAdminsController < EducationSchool::EducationsController
  before_action :set_education_admin, only: %i[ show edit update destroy ]

  # GET /education_admins or /education_admins.json
  def index
    @query_education_schools = @education_schools
    @query_education_schools = @query_education_schools.where(id: params[:education_school_id]) if params[:education_school_id].present?
    
    @education_admins = EducationAdmin.all
    @education_admins = EducationAdmin.search(params[:full_text_search]).records if params[:full_text_search].present?
    @education_admins = @education_admins.where(education_school: @query_education_schools)

    @pagination, @education_admins = pagy(@education_admins)
    @json_data = {
      education_admins: @education_admins.as_json(include: { education_school: { only: [:id, :name] } }, only: [:id, :name, :created_at, :updated_at]),
      select_education_schools: @education_schools.as_json(only: [:id, :name]),
    }.to_json
  end

  # GET /education_admins/1 or /education_admins/1.json
  def show
    # respond_to do |format|
    #     format.json do
    #     end
    #   end
    # end
  end
  # GET /education_admins/new
  def new
    @education_admin = EducationAdmin.new
  end

  # GET /education_admins/1/edit
  def edit
    @selected_categories = @education_admin.education_categories
  end

  # POST /education_admins or /education_admins.json
  def create
    @education_admin = EducationAdmin.new(education_admin_params)
    @education_admin.education_school_user = current_user
    respond_to do |format|
      if @education_admin.save
        if params[:education_admin][:email].present?
          user = User.find_by(email: params[:education_admin][:email])
          @education_admin.user = user if user.present?
        end
        if params[:education_admin][:education_category_id].present?
          education_categories = EducationCategory.where(id: params[:education_admin][:education_category_id])
          @education_admin.education_categories = education_categories
        end
    
        format.html { redirect_to education_admins_path, notice: CREATED_SUCCESS_MESSAGE }
        format.json { render :show, status: :created, location: @education_admin }
      else
        format.html { redirect_to request.referer, error: "Education teacher was not created: #{@education_admin.errors.full_messages}" }
        format.json { render json: @education_admin.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_admins/1 or /education_admins/1.json
  def update
    respond_to do |format|
      if @education_admin.update(education_admin_params)
        if params[:education_admin][:education_school_id].present?
          education_schools = EducationSchool.where(id: params[:education_admin][:education_school_id])
          @education_admin.education_school = education_schools.first
        end
        if params[:education_admin][:education_category_id].present?
          education_categories = EducationCategory.where(id: params[:education_admin][:education_category_id])
          @education_admin.education_categories = education_categories
        end

        format.html { redirect_to education_admins_path, notice: UPDATED_SUCCESS_MESSAGE }
        format.json { render :show, status: :ok, location: @education_admin }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_admin.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_admins/1 or /education_admins/1.json
  def destroy
    @education_admin.destroy!

    respond_to do |format|
      format.html { redirect_to education_admins_path, status: :see_other, notice: DELETED_SUCCESS_MESSAGE }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_admin
      @education_admin = EducationAdmin.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def education_admin_params
      params.expect(education_admin: [:name, :email, :education_school_id])
    end
end

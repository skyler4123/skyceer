class School::EducationAdminsController < School::EducationsController
  before_action :set_education_admin, only: %i[ show edit update destroy ]

  # GET /education_admins or /education_admins.json
  def index
    @education_admins = EducationAdmin.includes(:education_schools).joins(:education_schools).where(education_schools: @education_schools)
    @education_admins = @education_admins.select(:id, :name, :created_at, :updated_at, "education_schools.name as school_name", "education_schools.id as school_id")
    @pagy, @education_admins = pagy(@education_admins)
  end

  # GET /education_admins/1 or /education_admins/1.json
  def show
  end

  # GET /education_admins/new
  def new
    @education_admin = EducationAdmin.new
  end

  # GET /education_admins/1/edit
  def edit
  end

  # POST /education_admins or /education_admins.json
  def create
    user = User.find_by(email: params[:education_admin][:email])
    @education_school = EducationSchool.find_by(id: params[:education_admin][:education_school_id])
    @education_admin = EducationAdmin.new(education_admin_params)
    @education_admin.user = user if user.present?
    @education_admin.education_schools << @education_school if @education_school.present?

    respond_to do |format|
      if @education_admin.save
        format.html { redirect_to @education_admin, notice: "Education admin was successfully created." }
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
        format.html { redirect_to @education_admin, notice: "Education admin was successfully updated." }
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
      format.html { redirect_to education_admins_path, status: :see_other, notice: "Education admin was successfully destroyed." }
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
      params.expect(education_admin: [:name, :email])
    end
end

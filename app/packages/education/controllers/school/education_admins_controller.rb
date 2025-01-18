class School::EducationAdminsController < School::EducationsController
  before_action :set_education_admin, only: %i[ show edit update destroy ]

  # GET /education_admins or /education_admins.json
  def index
    @education_admins = EducationAdmin.includes(:education_schools).joins(:education_schools).where(education_schools: @education_schools)
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
    @admin_user = User.first_or_create(email: params[:education_admin][:email])
    @education_admin = EducationAdmin.new(education_admin_params)
    @education_admin.user = admin_user

    respond_to do |format|
      if @education_admin.save
        format.html { redirect_to @education_admin, notice: "Education admin was successfully created." }
        format.json { render :show, status: :created, location: @education_admin }
      else
        format.html { render :new, status: :unprocessable_entity }
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
      params.expect(education_admin: [:education_school_id, :name ])
    end
end

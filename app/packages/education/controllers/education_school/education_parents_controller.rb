class EducationSchool::EducationParentsController < EducationSchool::EducationsController
  before_action :set_education_parent, only: %i[ show edit update destroy ]

  # GET /education_parents or /education_parents.json
  def index
    @education_parents = EducationParent.all
  end

  # GET /education_parents/1 or /education_parents/1.json
  def show
  end

  # GET /education_parents/new
  def new
    @education_parent = EducationParent.new
  end

  # GET /education_parents/1/edit
  def edit
  end

  # POST /education_parents or /education_parents.json
  def create
    @education_parent = EducationParent.new(education_parent_params)

    respond_to do |format|
      if @education_parent.save
        format.html { redirect_to @education_parent, notice: "Education parent was successfully created." }
        format.json { render :show, status: :created, location: @education_parent }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_parent.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_parents/1 or /education_parents/1.json
  def update
    respond_to do |format|
      if @education_parent.update(education_parent_params)
        format.html { redirect_to @education_parent, notice: "Education parent was successfully updated." }
        format.json { render :show, status: :ok, location: @education_parent }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_parent.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_parents/1 or /education_parents/1.json
  def destroy
    @education_parent.destroy!

    respond_to do |format|
      format.html { redirect_to education_parents_path, status: :see_other, notice: "Education parent was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_parent
      @education_parent = EducationParent.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def education_parent_params
      params.expect(education_parent: [ :user_id, :name, :email, :discarded_at ])
    end
end

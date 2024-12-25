class EducationClassesController < EducationsController
  before_action :set_education_schools, only: %i[ index ]
  before_action :set_education_class, only: %i[ show edit update destroy ]

  # GET /education_classes or /education_classes.json
  def index
    @education_classes = EducationClass.where(education_school: @education_schools)
    @pagy, @education_classes = pagy(@education_classes)
  end

  # GET /education_classes/1 or /education_classes/1.json
  def show
  end

  # GET /education_classes/new
  def new
    @education_class = EducationClass.new
  end

  # GET /education_classes/1/edit
  def edit
  end

  # POST /education_classes or /education_classes.json
  def create
    @education_class = EducationClass.new(education_class_params)

    respond_to do |format|
      if @education_class.save
        format.html { redirect_to @education_class, notice: "Education class was successfully created." }
        format.json { render :show, status: :created, location: @education_class }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_class.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_classes/1 or /education_classes/1.json
  def update
    respond_to do |format|
      if @education_class.update(education_class_params)
        format.html { redirect_to @education_class, notice: "Education class was successfully updated." }
        format.json { render :show, status: :ok, location: @education_class }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_class.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_classes/1 or /education_classes/1.json
  def destroy
    @education_class.destroy!

    respond_to do |format|
      format.html { redirect_to education_classes_path, status: :see_other, notice: "Education class was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_class
      @education_class = EducationClass.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def education_class_params
      params.require(:education_class).permit(:education_school_id, :name, :category)
    end
end

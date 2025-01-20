class School::EducationSubjectsController < School::EducationsController
  before_action :set_education_subject, only: %i[ show edit update destroy ]

  # GET /education_subjects or /education_subjects.json
  def index
    # get education_schools from id params when it exists instead of current_education_school
    @education_schools = EducationSchool.find(params[:education_school_id]) if params[:education_school_id].present?
    @education_subjects = EducationSubject.where(education_school: @education_schools)
    @pagy, @education_subjects = pagy(@education_subjects)
  end

  # GET /education_subjects/1 or /education_subjects/1.json
  def show
  end

  # GET /education_subjects/new
  def new
    @education_subject = EducationSubject.new
  end

  # GET /education_subjects/1/edit
  def edit
  end

  # POST /education_subjects or /education_subjects.json
  def create
    @education_subject = EducationSubject.new(education_subject_params)
    # appoint category if education_category_id is present
    if params[:education_subject][:education_category_id].present?
      @education_category = EducationCategory.find(params[:education_subject][:education_category_id])
      @education_subject.education_categories << @education_category
    end

    respond_to do |format|
      if @education_subject.save
        format.html { redirect_to education_subjects_path, notice: "Education subject was successfully created." }
        format.json { render :show, status: :created, location: @education_subject }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_subject.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_subjects/1 or /education_subjects/1.json
  def update
    respond_to do |format|
      if @education_subject.update(education_subject_params)
        format.html { redirect_to @education_subject, notice: "Education subject was successfully updated." }
        format.json { render :show, status: :ok, location: @education_subject }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_subject.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_subjects/1 or /education_subjects/1.json
  def destroy
    @education_subject.destroy!

    respond_to do |format|
      format.html { redirect_to education_subjects_path, status: :see_other, notice: "Education subject was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  def education_class_id
    @education_classes = EducationClass.where(id: params[:education_class_id])
    @education_subjects = EducationSubject.joins(:education_classes).where(education_classes: @education_classes)
    render json: @education_subjects
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_subject
      @education_subject = EducationSubject.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def education_subject_params
      params.expect(education_subject: [ :name, :description, :education_school_id ])
    end
end

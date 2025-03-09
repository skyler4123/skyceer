class EducationSchool::EducationSubjectsController < EducationSchool::EducationsController
  before_action :set_education_subject, only: %i[ edit update destroy ]

  # GET /education_subjects or /education_subjects.json
  def index
    # get education_schools from id params when it exists instead of current_education_school
    if params[:education_school_id].present?
      @education_schools = EducationSchool.find(params[:education_school_id])
      @education_subjects = EducationSubject.where(education_school: @education_schools)
    end

    # get from education_class_id params when it exists
    if params[:education_class_id].present?
      @education_classes = EducationClass.where(id: params[:education_class_id])
      @education_subjects = EducationSubject.joins(:education_classes).where(education_classes: @education_classes)
    end

    # if education_subject is not found, get from current_education_school
    @education_subjects = EducationSubject.where(education_school: @education_schools) if @education_subjects.blank?
    @pagination, @education_subjects = pagy(@education_subjects)
    @data = {
      education_subjects: @education_subjects.as_json(only: %i[id education_school_id name description discarded_at created_at updated_at], include: { education_school: { only: %i[id name] } }),
    }.to_json
  end

  # GET /education_subjects/new
  def new
    @education_subject = EducationSubject.new
    select_options_schools_and_categories(@education_schools)
  end

  # GET /education_subjects/1/edit
  def edit
  end

  # POST /education_subjects or /education_subjects.json
  def create
    @education_subject = EducationSubject.new(education_subject_params)
    education_schools = EducationSchool.where(id: params[:education_subject][:education_school_id]) if params[:education_subject][:education_school_id].present?
    education_categories = EducationCategory.where(id: params[:education_subject][:education_category_id]) if params[:education_subject][:education_category_id].present?
    return redirect_to request.referer, error: "Category is not belongs to school" unless check_category_belongs_to_school(education_categories, education_schools)

    respond_to do |format|
      if @education_subject.save
        education_categories = EducationCategory.where(id: params[:education_category_id]) if params[:education_category_id].present?
        @education_subject.education_categories = education_categories if education_categories.present?

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
    education_schools = [@education_subject.education_school]
    education_categories = EducationCategory.where(id: params[:education_subject][:education_category_id]) if params[:education_subject][:education_category_id].present?
    select_options_schools_and_categories(education_schools)
    return redirect_to request.referer, error: "Category is not belongs to school" unless check_category_belongs_to_school(education_categories, education_schools)

    respond_to do |format|
      if @education_subject.update(update_education_subject_params)
        education_categories = EducationCategory.where(id: params[:education_category_id]) if params[:education_category_id].present?
        @education_subject.education_categories = education_categories if education_categories.present?

        format.html { redirect_to education_subjects_path, notice: "Education subject was successfully updated." }
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

    def update_education_subject_params
      params.expect(education_subject: [ :name, :description ])
    end
end

class EducationSchool::EducationClassesController < EducationSchool::EducationsController
  before_action :set_education_class, only: %i[ show edit update destroy ]

  # GET /education_classes or /education_classes.json
  def index
    # get education_schools from id params when it exists instead of current_education_school
    @education_schools = EducationSchool.find(params[:education_school_id]) if params[:education_school_id].present?
    @education_classes = EducationClass.where(education_school: @education_schools)
    @pagination, @education_classes = pagy(@education_classes)
    @data = {
      education_classes: @education_classes.as_json(only: %i[id education_school_id education_course_id name discarded_at created_at updated_at], include: { education_school: { only: %i[id name] } }),
    }.to_json
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
    @education_exams = EducationExam.where(education_school: @education_schools)
  end

  # POST /education_classes or /education_classes.json
  def create
    @education_class = EducationClass.new(education_class_params)
    # appoint category if education_category_id is present
    if params[:education_class][:education_category_id].present?
      @education_category = EducationCategory.find(params[:education_class][:education_category_id])
      @education_class.education_categories << @education_category
    end

    respond_to do |format|
      if @education_class.save
        if params[:education_class][:education_category_id].present?
          @education_category = EducationCategory.find(params[:education_class][:education_category_id])
          @education_class.education_categories << @education_category
        end
        if params[:education_class][:education_course_id].present?
          @education_course = EducationCourse.find(params[:education_class][:education_course_id])
          @education_class.education_courses << @education_course
        end

        format.html { redirect_to education_classes_path, notice: "Education class was successfully created." }
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
    @education_class = EducationClass.find(params.expect(:id))
  end

  # Only allow a list of trusted parameters through.
  def education_class_params
    params.expect(education_class: [ :education_school_id, :education_course_id, :name, :discarded_at ])
  end
end

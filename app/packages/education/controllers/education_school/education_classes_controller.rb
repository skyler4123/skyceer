class EducationSchool::EducationClassesController < EducationSchool::EducationsController
  before_action :set_education_class, only: %i[ edit update destroy ]

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

  # GET /education_classes/new
  def new
    @education_class = EducationClass.new
    @combined_schools_and_courses = combine_schools_and_courses(@education_schools, @education_courses)
  end

  # GET /education_classes/1/edit
  def edit
    @education_courses = EducationCourse.where(education_school: @education_schools)
    @combined_schools_and_courses = combine_schools_and_courses(@education_schools, @education_courses)
  end

  # POST /education_classes or /education_classes.json
  def create
    @education_class = EducationClass.new(education_class_params)
    education_school = EducationSchool.find(params[:education_class][:education_school_id])
    education_course = education_school.education_courses.where(id: params[:education_class][:education_course_id])
    return redirect_to request.referer, error: "Course is not belongs to the school" if education_course.blank?

    respond_to do |format|
      if @education_class.save
        education_categories = EducationCategory.where(id: params[:education_class][:education_category_id]) if params[:education_class][:education_category_id].present?
        @education_class.education_categories = education_categories if education_categories.present?

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
      if @education_class.update(update_education_class_params)
        education_categories = EducationCategory.where(id: params[:education_class][:education_category_id]) if params[:education_class][:education_category_id].present?
        @education_class.education_categories = education_categories if education_categories.present?

        format.html { redirect_to education_classes_path, notice: "Education class was successfully updated." }
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
    params.expect(education_class: [ :education_school_id, :education_course_id, :name ])
  end

  def update_education_class_params
    params.expect(education_class: [:name])
  end

  def combine_schools_and_courses(schools, courses)
    combined_array = []
    schools.each do |school|
      school.education_courses.each do |course|
        combined_array << ["#{school.name} - #{course.name}", course.id]
      end
    end
    combined_array
  end
end

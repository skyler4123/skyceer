class EducationSchool::EducationCoursesController < EducationSchool::EducationsController
  before_action :set_education_course, only: %i[ edit update destroy ]

  # GET /education_courses or /education_courses.json
  def index
    # get education_schools from id params when it exists instead of current_education_school
    @education_schools = EducationSchool.find(params[:education_school_id]) if params[:education_school_id].present?
    @education_courses = EducationCourse.where(education_school: @education_schools)
    @pagination, @education_courses = pagy(@education_courses)
    @data = {
      education_courses: @education_courses.as_json(only: %i[id education_school_id name description discarded_at created_at updated_at], include: { education_school: { only: %i[id name] } }),
    }.to_json
  end

  # GET /education_courses/new
  def new
    @education_course = EducationCourse.new
  end

  # GET /education_courses/1/edit
  def edit
  end

  # POST /education_courses or /education_courses.json
  def create
    @education_course = EducationCourse.new(education_course_params)

    respond_to do |format|
      if @education_course.save
        education_categories = EducationCategory.where(id: params[:education_course][:education_category_id]) if params[:education_course][:education_category_id].present?
        @education_course.education_categories = education_categories if education_categories.present?

        format.html { redirect_to education_courses_path, notice: "Education course was successfully created." }
        format.json { render :show, status: :created, location: @education_course }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_course.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_courses/1 or /education_courses/1.json
  def update
    respond_to do |format|
      if @education_course.update(update_education_course_params)
        education_categories = EducationCategory.where(id: params[:education_course][:education_category_id]) if params[:education_course][:education_category_id].present?
        @education_course.education_categories = education_categories if education_categories.present?
        
        format.html { redirect_to education_courses_path, notice: "Education course was successfully updated." }
        format.json { render :show, status: :ok, location: @education_course }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_course.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_courses/1 or /education_courses/1.json
  def destroy
    @education_course.destroy!

    respond_to do |format|
      format.html { redirect_to education_courses_path, status: :see_other, notice: "Education course was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  def education_school_id
    @education_school = EducationSchool.find(params[:education_school_id])
    @education_courses = EducationCourse.where(education_school: @education_school)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_course
      @education_course = EducationCourse.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def education_course_params
      params.expect(education_course: [ :name, :description, :education_school_id ])
    end

    def update_education_course_params
      params.expect(education_course: [ :name, :description ])
    end
end

class EducationSchools::EducationCoursesontroller < EducationsController
    before_action :set_education_school
    before_action :set_education_couses, only: %i[ show edit update destroy ]
  
    # GET /education_courses or /education_courses.json
    def index
      @education_courses = @education_school.education_courses.all
    end
  
    # GET /education_courses/1 or /education_courses/1.json
    def show
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
      debugger
      @education_course = EducationCourse.new(education_school: @education_school, **education_course_params)
  
      respond_to do |format|
        if @education_course.save
          format.html { redirect_to @education_course, notice: "Education course was successfully created." }
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
        if @education_course.update(education_course_params)
          format.html { redirect_to @education_course, notice: "Education course was successfully updated." }
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
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_education_course
        @education_course = EducationCourse.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def education_course_params
        params.require(:education_course).permit(:name, :category)
      end
  end
  
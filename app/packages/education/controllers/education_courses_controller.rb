class EducationCoursesController < EducationsController
    before_action :set_education_courses, only: %i[ show edit update destroy ]
  
    # GET /education_courses or /education_courses.json
    def index
      @education_courses = EducationCourse.all
    end
  
    # GET /education_courses/1 or /education_courses/1.json
    def show
    end
  
    # GET /education_courses/new
    def new
      @education_courses = EducationCourse.new
    end
  
    # GET /education_courses/1/edit
    def edit
    end
  
    # POST /education_courses or /education_courses.json
    def create
      @education_courses = EducationCourse.new(education_courses_params)
  
      respond_to do |format|
        if @education_courses.save
          format.html { redirect_to @education_courses, notice: "Education courses was successfully created." }
          format.json { render :show, status: :created, location: @education_courses }
        else
          format.html { render :new, status: :unprocessable_entity }
          format.json { render json: @education_courses.errors, status: :unprocessable_entity }
        end
      end
    end
  
    # PATCH/PUT /education_courses/1 or /education_courses/1.json
    def update
      respond_to do |format|
        if @education_courses.update(education_course_params)
          format.html { redirect_to @education_courses, notice: "Education course was successfully updated." }
          format.json { render :show, status: :ok, location: @education_courses }
        else
          format.html { render :edit, status: :unprocessable_entity }
          format.json { render json: @education_courses.errors, status: :unprocessable_entity }
        end
      end
    end
  
    # DELETE /education_courses/1 or /education_courses/1.json
    def destroy
      @education_courses.destroy!
  
      respond_to do |format|
        format.html { redirect_to eeducation_courses_path, status: :see_other, notice: "Education course was successfully destroyed." }
        format.json { head :no_content }
      end
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def education_course
        @education_courses = EducationCourse.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def education_courses_params
        params.require(:education_course).permit(:education_school_id, :name, :category)
      end
  end
  
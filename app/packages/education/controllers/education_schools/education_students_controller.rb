class EducationSchools::EducationStudentsController < EducationsController
  before_action :set_education_school
  before_action :set_education_student, only: %i[ show edit update destroy ]

  # GET /education_students or /education_students.json
  def index
    @education_students = @education_school.education_students.all
  end

  # GET /education_students/1 or /education_students/1.json
  def show
  end

  # GET /education_students/new
  def new
    @education_student = EducationStudent.new
  end

  # GET /education_students/1/edit
  def edit
  end

  # POST /education_students or /education_students.json
  def create
    @student_user = Education::Student::UserService.find_or_create(name: params[:education_student][:name], email: params[:education_student][:email])
    @education_student = EducationStudent.build(**education_student_params, user: @student_user, education_school: @education_school)

    respond_to do |format|
      if @education_student.save
        format.html { redirect_to education_school_education_students_path, notice: "Education student was successfully created." }
        format.json { render :show, status: :created, location: @education_student }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_student.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_students/1 or /education_students/1.json
  def update
    respond_to do |format|
      if @education_student.update(education_student_params)
        format.html { redirect_to @education_student, notice: "Education student was successfully updated." }
        format.json { render :show, status: :ok, location: @education_student }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_student.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_students/1 or /education_students/1.json
  def destroy
    @education_student.destroy!

    respond_to do |format|
      format.html { redirect_to education_students_path, status: :see_other, notice: "Education student was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_student
      @education_student = EducationStudent.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def education_student_params
      params.require(:education_student).permit(:name)
    end
end

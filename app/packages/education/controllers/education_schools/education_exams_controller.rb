class EducationSchools::EducationExamsController < EducationsController
  before_action :set_education_school
  before_action :set_education_exam, only: %i[ show edit update destroy ]

  # GET /education_exams or /education_exams.json
  def index
    @education_exams = @education_school.education_exams.all
    @pagy, @education_exams = pagy(@education_exams)
  end

  # GET /education_exams/1 or /education_exams/1.json
  def show
  end

  # GET /education_exams/new
  def new
    @education_exam = EducationExam.new
  end

  # GET /education_exams/1/edit
  def edit
  end

  # POST /education_exams or /education_exams.json
  def create
    @education_exam = EducationExam.new(education_exam_params)

    respond_to do |format|
      if @education_exam.save
        format.html { redirect_to @education_exam, notice: "Education exam was successfully created." }
        format.json { render :show, status: :created, location: @education_exam }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_exam.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_exams/1 or /education_exams/1.json
  def update
    respond_to do |format|
      if @education_exam.update(education_exam_params)
        format.html { redirect_to @education_exam, notice: "Education exam was successfully updated." }
        format.json { render :show, status: :ok, location: @education_exam }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_exam.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_exams/1 or /education_exams/1.json
  def destroy
    @education_exam.destroy!

    respond_to do |format|
      format.html { redirect_to education_exams_path, status: :see_other, notice: "Education exam was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_exam
      @education_exam = EducationExam.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def education_exam_params
      params.expect(education_exam: [ :name, :description, :score, :status, :education_school_id, :education_subject_id, :education_student_id, :education_category_id, :education_course_id ])
    end
end

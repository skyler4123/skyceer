class EducationSchools::EducationExamQuestionsController < EducationsController
  before_action :set_education_school
  before_action :set_education_exam_question, only: %i[ show edit update destroy ]

  # GET /education_exam_questions or /education_exam_questions.json
  def index
    @education_exam_questions = EducationExamQuestion.all
  end

  # GET /education_exam_questions/1 or /education_exam_questions/1.json
  def show
  end

  # GET /education_exam_questions/new
  def new
    @education_exam_question = EducationExamQuestion.new
  end

  # GET /education_exam_questions/1/edit
  def edit
  end

  # POST /education_exam_questions or /education_exam_questions.json
  def create
    @education_exam_question = EducationExamQuestion.new(education_exam_question_params)

    respond_to do |format|
      if @education_exam_question.save
        format.html { redirect_to @education_exam_question, notice: "Education exam question was successfully created." }
        format.json { render :show, status: :created, location: @education_exam_question }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_exam_question.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_exam_questions/1 or /education_exam_questions/1.json
  def update
    respond_to do |format|
      if @education_exam_question.update(education_exam_question_params)
        format.html { redirect_to @education_exam_question, notice: "Education exam question was successfully updated." }
        format.json { render :show, status: :ok, location: @education_exam_question }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_exam_question.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_exam_questions/1 or /education_exam_questions/1.json
  def destroy
    @education_exam_question.destroy!

    respond_to do |format|
      format.html { redirect_to education_exam_questions_path, status: :see_other, notice: "Education exam question was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_exam_question
      @education_exam_question = EducationExamQuestion.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def education_exam_question_params
      params.expect(education_exam_question: [ :education_exam_id, :education_question_id, :score, :time, :status, :anwser, :result ])
    end
end

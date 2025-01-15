class School::EducationQuestionsController < School::EducationsController
  before_action :set_education_question, only: %i[ show edit update destroy ]

  # GET /education_questions or /education_questions.json
  def index
    @education_questions = EducationQuestion.where(education_school: @education_schools)
    @pagy, @education_questions = pagy(@education_questions)
  end

  # GET /education_questions/1 or /education_questions/1.json
  def show
  end

  # GET /education_questions/new
  def new
    @education_question = EducationQuestion.new
  end

  # GET /education_questions/1/edit
  def edit
  end

  # POST /education_questions or /education_questions.json
  def create
    @education_question = EducationQuestion.new(education_question_params)

    respond_to do |format|
      if @education_question.save
        format.html { redirect_to education_questions_path, notice: "Education question was successfully created." }
        format.json { render :show, status: :created, location: @education_question }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_question.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_questions/1 or /education_questions/1.json
  def update
    respond_to do |format|
      if @education_question.update(education_question_params)
        format.html { redirect_to @education_question, notice: "Education question was successfully updated." }
        format.json { render :show, status: :ok, location: @education_question }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_question.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_questions/1 or /education_questions/1.json
  def destroy
    @education_question.destroy!

    respond_to do |format|
      format.html { redirect_to education_questions_path, status: :see_other, notice: "Education question was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_question
      @education_question = EducationQuestion.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def education_question_params
      params.expect(education_question: [ :education_school_id, :education_teacher_id, :education_category_id, :question_type, :title, :content, :anwser, :choice_1, :choice_2, :choice_3, :choice_4 ])
    end
end

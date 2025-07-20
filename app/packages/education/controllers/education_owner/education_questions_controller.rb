class EducationOwner::EducationQuestionsController < EducationOwner::EducationsController
  before_action :set_education_question, only: %i[ edit update destroy ]

  # GET /education_questions or /education_questions.json
  def index
    @education_questions = EducationQuestion.where(education_school: @education_schools)
    @pagy, @education_questions = pagy(@education_questions)
  end

  # GET /education_questions/new
  def new
    @education_question = EducationQuestion.new
  end

  # GET /education_questions/1/edit
  def edit
    @selected_categories = @education_question.education_categories
  end

  # POST /education_questions or /education_questions.json
  def create
    @education_question = EducationQuestion.new(education_question_params)

    respond_to do |format|
      if @education_question.save
        if params[:education_question][:education_category_id].present?
          education_categories = EducationCategory.where(id: params[:education_question][:education_category_id])
          @education_question.education_categories = education_categories
        end

        format.html { redirect_to education_questions_path, notice: CREATED_SUCCESS_MESSAGE }
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
        if params[:education_question][:education_category_id].present?
          education_categories = EducationCategory.where(id: params[:education_question][:education_category_id])
          @education_question.education_categories = education_categories
        end
        
        format.html { redirect_to education_questions_path, notice: "Education question was successfully updated." }
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

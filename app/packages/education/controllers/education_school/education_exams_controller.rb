class EducationSchool::EducationExamsController < EducationSchool::EducationsController
  before_action :set_education_exam, only: %i[ edit update destroy ]

  # GET /education_exams or /education_exams.json
  def index
    @education_exams = EducationExam.where(education_school: @education_schools)
    @pagination, @education_exams = pagy(@education_exams)
    @data = {
      education_exams: @education_exams.as_json(only: %i[id education_school_id name description discarded_at created_at updated_at], include: { education_school: { only: %i[id name] } }),
    }.to_json
  end

  # GET /education_exams/new
  def new
    @education_exam = EducationExam.new
    @data = {
      education_exam: @education_exam.as_json(
        methods: %i[status_enums]
      ),
      education_categories: @education_categories.as_json(only: %i[id name]),
      education_subjects: @education_subjects.as_json(only: %i[id name]),
      education_schools: @education_schools.as_json(
        only: %i[id name],
        include: { education_classes: { only: %i[id name] }, education_subjects: { only: %i[id name] } }),
    }.to_json
  end

  # GET /education_exams/1/edit
  def edit
    @education_subjects = EducationSubject.where(education_school: @education_schools)
    @education_school = @education_exam.education_school
    @education_classes = @education_school.education_classes
    @data = {
      education_exam: @education_exam.as_json(
        only: %i[id education_school_id name description status education_school_id education_subject_id],
        include: { education_categories: { only: %i[id name] }, education_classes: { only: %i[id name] } },
        methods: %i[status_enums]
      ),
      education_categories: @education_categories.as_json(only: %i[id name]),
      education_subjects: @education_subjects.as_json(only: %i[id name]),
      education_schools: @education_schools.as_json(only: %i[id name]),
      education_classes: @education_classes.as_json(only: %i[id name]),
    }.to_json
  end

  # POST /education_exams or /education_exams.json
  def create
    @education_exam = EducationExam.new(education_exam_params)
    respond_to do |format|
      if @education_exam.save
        appoint_with_education_categories
        appoint_with_education_exams
        format.html { redirect_to edit_education_exam_path(@education_exam), notice: CREATED_SUCCESS_MESSAGE }
        format.json { render :show, status: :created, location: @education_exam }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_exam.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_exams/1 or /education_exams/1.json
  def update
    # debugger
    respond_to do |format|
      if @education_exam.update(update_education_exam_params)
        appoint_with_education_categories
        appoint_with_education_exams
        format.html { redirect_to edit_education_exam_path(@education_exam), notice: UPDATED_SUCCESS_MESSAGE }
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
      format.html { redirect_to education_exams_path, status: :see_other, notice: DELETED_SUCCESS_MESSAGE }
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
      params.expect(education_exam: [ :name, :description, :status, :education_school_id, :education_subject_id, :discarded_at ])
    end

    def update_education_exam_params
      params.expect(education_exam: [ :name, :description, :status, :discarded_at ])
    end

    def appoint_with_education_categories
      return unless params[:education_exam][:education_category_id].present?
      education_categories = EducationCategory.where(id: params[:education_exam][:education_category_id])
      @education_exam.education_categories = education_categories
    end

    def appoint_with_education_exams
      return unless params[:education_exam][:education_class_id].present?
      education_classes = EducationClass.where(id: params[:education_exam][:education_class_id])
      ActiveRecord::AppointmentService.new(@education_exam, education_classes, :education_classes) do |service|
        service.append do |appended_education_classes|
          education_exam_to_classes = appended_education_classes.map do |appended_education_class|
            education_exam_to_class = EducationExamToClass.find_or_create_by!(
              education_exam: @education_exam,
              education_class: appended_education_class,
            )
            education_exam_to_class.undiscard if education_exam_to_class.discarded?
            education_exam_to_class
          end
          EducationExamToClass::AfterCreate::SyncToEducationExamToStudentJob.perform_later(education_exam_to_classes.pluck(:id))
        end

        service.remove do |removed_education_classes|
          # EducationExamToStudent::EducationExamToClass::AfterDestroyJob.perform_later(removed_education_class.id)
          # @education_exam.education_classes.delete(removed_education_class)
          EducationExamToClass.where(education_exam: @education_exam, education_class: removed_education_classes).each(&:discard)
        end
      end
    end
end

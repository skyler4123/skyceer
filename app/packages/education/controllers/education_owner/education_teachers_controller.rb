require "pagy/extras/elasticsearch_rails"

class EducationOwner::EducationTeachersController < EducationOwner::EducationsController
  before_action :set_education_teacher, only: %i[ edit update destroy ]

  # GET /education_teachers or /education_teachers.json
  def index
    if params[:full_text_search].present?
      @education_teachers = EducationTeacher.search(params[:full_text_search]).records
    elsif params[:education_school_id].present?
      @education_teachers = EducationTeacher.where(education_school_id: params[:education_school_id])
    else
      @education_teachers = EducationTeacher.where(education_school: @education_schools)
    end
    @pagination, @education_teachers = pagy(@education_teachers)
    @json_data = {
      education_teachers: @education_teachers.as_json(include: [ :education_school, :education_classes, :education_subjects ])
    }.to_json
  end

  # GET /education_teachers/new
  def new
    @education_teacher = EducationTeacher.new
  end

  # GET /education_teachers/1/edit
  def edit
    @education_classes = EducationClass.where(education_school: @education_schools)
    @education_subjects = EducationSubject.where(education_school: @education_schools)
    @json_data = {
      education_teacher: @education_teacher.as_json(include: [ :education_school, :education_classes, :education_categories, :education_subjects ]),
      education_subjects: @education_subjects.as_json,
      education_schools: @education_schools.as_json,
      education_classes: @education_classes.as_json,
      education_categories: @education_categories.as_json
    }.to_json
  end

  # POST /education_teachers or /education_teachers.json
  def create
    @education_teacher = EducationTeacher.new(education_teacher_params)
    @education_teacher.education_school_user = current_user

    respond_to do |format|
      if @education_teacher.save
        if params[:education_teacher][:email].present?
          user = User.find_by(email: params[:education_teacher][:email])
          @education_teacher.user = user if user.present?
        end
        if params[:education_teacher][:education_class_id].present?
          education_classes = EducationClass.where(id: params[:education_teacher][:education_class_id])
          @education_teacher.education_classes = education_classes
        end
        if params[:education_teacher][:education_category_id].present?
          education_categories = EducationCategory.where(id: params[:education_teacher][:education_category_id])
          @education_teacher.education_categories = education_categories
        end

        format.html { redirect_to education_teachers_path, notice: CREATED_SUCCESS_MESSAGE }
        format.json { render :show, status: :created, location: @education_teacher }
      else
        format.html { redirect_to request.referer, error: "Education teacher was not created: #{@education_teacher.errors.full_messages}" }
        format.json { render json: @education_teacher.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_teachers/1 or /education_teachers/1.json
  def update
    respond_to do |format|
      if @education_teacher.update(education_teacher_params)
        if params[:education_teacher][:education_school_id].present?
          education_schools = EducationSchool.where(id: params[:education_teacher][:education_school_id])
          @education_teacher.education_school = education_schools.first
        end
        if params[:education_teacher][:education_class_id].present?
          education_classes = EducationClass.where(id: params[:education_teacher][:education_class_id])
          @education_teacher.education_classes = education_classes
        end
        if params[:education_teacher][:education_category_id].present?
          education_categories = EducationCategory.where(id: params[:education_teacher][:education_category_id])
          @education_teacher.education_categories = education_categories
        end
        if params[:education_teacher][:education_subject_id].present?
          education_subjects = EducationSubject.where(id: params[:education_teacher][:education_subject_id])
          @education_teacher.education_subjects = education_subjects
        end

        format.html { redirect_to edit_education_teacher_path(@education_teacher), notice: UPDATED_SUCCESS_MESSAGE }
        format.json { render :show, status: :ok, location: @education_teacher }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_teacher.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_teachers/1 or /education_teachers/1.json
  def destroy
    @education_teacher.destroy!

    respond_to do |format|
      format.html { redirect_to education_teachers_path, status: :see_other, notice: DELETED_SUCCESS_MESSAGE }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_teacher
      @education_teacher = EducationTeacher.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def education_teacher_params
      params.expect(education_teacher: [ :name, :email, :education_school_id ])
    end
end

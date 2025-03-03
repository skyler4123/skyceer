require 'pagy/extras/elasticsearch_rails'

class EducationSchool::EducationTeachersController < EducationSchool::EducationsController
  before_action :set_education_teacher, only: %i[ show edit update destroy ]

  # GET /education_teachers or /education_teachers.json
  def index
    if params[:full_text_search].present?
      @education_teachers = EducationTeacher.search(params[:full_text_search]).records
    elsif params[:education_school_id].present?
      @education_teachers = EducationTeacher.where(education_school_id: params[:education_school_id])
    else
      @education_teachers = EducationTeacher.joins(:education_schools).where(education_schools: @education_schools)
    end
    @pagination, @education_teachers = pagy(@education_teachers)
    @data = {
      education_teachers: @education_teachers.as_json(include: [:education_schools, :education_classes])
    }.to_json
  end

  # GET /education_teachers/1 or /education_teachers/1.json
  def show
    @data = {
      education_teacher: @education_teacher.as_json(
        only: [:id, :name, :email],
        include: {
          education_schools: { only: [:id, :name] }
        }
      )
    }.to_json
  end

  # GET /education_teachers/new
  def new
    @education_teacher = EducationTeacher.new
  end

  # GET /education_teachers/1/edit
  def edit
    @education_categories = EducationCategory.joins(:education_school).where(education_school: @education_schools)
    # @data = {
    #   education_teacher: @education_teacher.as_json(include: [:education_schools, :education_classes]),
    #   education_schools: @education_schools.as_json(only: [:id, :name]),
    #   education_categories: @education_categories.as_json(only: [:id, :name, :nested_level], methods: [:children_categories])
    # }.to_json
  end

  # POST /education_teachers or /education_teachers.json
  def create
    user = User.find_by(email: params[:education_teacher][:email])
    school = EducationSchool.find_by(id: params[:education_teacher][:education_school_id])
    category = EducationCategory.find_by(id: params[:education_teacher][:education_category_id])
    @education_teacher = EducationTeacher.new(education_teacher_params)
    @education_teacher.user = user if user.present?
    @education_teacher.education_schools << school if school.present?
    @education_teacher.education_categories << category if category.present?

    respond_to do |format|
      if @education_teacher.save
        format.html { redirect_to education_teachers_path, notice: "Education teacher was successfully created." }
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
        format.html { redirect_to @education_teacher, notice: "Education teacher was successfully updated." }
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
      format.html { redirect_to education_teachers_path, status: :see_other, notice: "Education teacher was successfully destroyed." }
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
      params.expect(education_teacher: [:name])
    end
end

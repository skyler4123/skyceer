require 'pagy/extras/elasticsearch_rails'

class EducationSchool::EducationStudentsController < EducationSchool::EducationsController
  before_action :set_education_student, only: %i[ edit update destroy ]

  # GET /education_students or /education_students.json
  def index
    @education_students = EducationStudent.all
    @education_students = @education_students.where(education_school_user: current_user)
    @education_students = @education_students.joins(:education_schools).where(education_schools: { id: params[:education_school_id] }) if params[:education_school_id].present?
    @education_students = @education_students.joins(:education_classes).where(education_classes: { id: params[:education_class_id] }) if params[:education_class_id].present?
    @education_students = @education_students.select(:id, :name, :created_at, :updated_at)
    @pagination, @education_students = pagy(@education_students)
    @data = {
      education_students: @education_students.as_json(include: { education_schools: { only: [:id, :name] }, education_classes: { only: [:id, :name] } }, only: [:id, :name, :created_at, :updated_at]),
      selection_education_classes: EducationClass.where(education_school: @education_schools).as_json(only: [:id, :name]),
      selection_education_schools: @education_schools.as_json(only: [:id, :name]),
    }.to_json
  end

  # GET /education_students/new
  def new
    @education_student = EducationStudent.new
  end

  # GET /education_students/1/edit
  def edit
    @education_classes = EducationClass.where(education_school: @education_schools)
    @selected_categories = @education_student.education_categories
  end

  # POST /education_students or /education_students.json
  def create
    @education_student = EducationStudent.new(education_student_params)
    @education_student.education_school_user = current_user

    respond_to do |format|
      if @education_student.save
        if params[:education_student][:email].present?
          user = User.find_by(email: params[:education_student][:email])
          @education_student.user = user if user.present?
        end
        if params[:education_student][:education_school_id].present?
          education_schools = EducationSchool.where(id: params[:education_student][:education_school_id])
          @education_student.education_schools = education_schools
        end
        if params[:education_student][:education_class_id].present?
          education_classes = EducationClass.where(id: params[:education_student][:education_class_id])
          @education_student.education_classes = education_classes
        end
        if params[:education_student][:education_category_id].present?
          education_categories = EducationCategory.where(id: params[:education_student][:education_category_id])
          @education_student.education_categories = education_categories
        end

        format.html { redirect_to education_students_path, notice: CREATED_SUCCESS_MESSAGE }
        format.json { render :show, status: :created, location: @education_student }
      else
        format.html { redirect_to request.referer, error: "Education teacher was not created: #{@education_student.errors.full_messages}" }
        format.json { render json: @education_student.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_students/1 or /education_students/1.json
  def update
    respond_to do |format|
      if @education_student.update(education_student_params)
        if params[:education_student][:education_school_id].present?
          education_schools = EducationSchool.where(id: params[:education_student][:education_school_id])
          @education_student.education_schools = education_schools
        end
        if params[:education_student][:education_class_id].present?
          education_classes = EducationClass.where(id: params[:education_student][:education_class_id])
          @education_student.education_classes = education_classes
        end
        if params[:education_student][:education_category_id].present?
          education_categories = EducationCategory.where(id: params[:education_student][:education_category_id])
          @education_student.education_categories = education_categories
        end

        format.html { redirect_to education_students_path, notice: UPDATED_SUCCESS_MESSAGE }
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
      format.html { redirect_to education_students_path, status: :see_other, notice: DELETED_SUCCESS_MESSAGE }
      format.json { head :no_content }
    end
  end

  def import_view
  end

  def import
    return redirect_to import_view_education_students_path, error: "Please select a file to import" if params[:payload].nil?

    payload = JSON.parse(params[:payload])
    payload.each do |data|
      education_student = EducationStudent.new(data)
      education_student.education_school_user = current_user
      education_student.save!
    end

    redirect_to education_students_path, notice: "Education students were successfully imported."
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_student
      @education_student = EducationStudent.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def education_student_params
      params.expect(education_student: [:name, :email])
    end
end

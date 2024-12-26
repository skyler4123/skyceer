require 'pagy/extras/elasticsearch_rails'

class EducationStudentsController < EducationsController
  # before_action :set_education_schools, only: %i[ index ]
  before_action :set_education_student, only: %i[ show edit update destroy ]

  # GET /education_students or /education_students.json
  def index
    if params[:full_text_search].present?
      @education_students = EducationStudent.search(params[:full_text_search]).records
    elsif params[:education_school_id].present? || params[:education_class_id].present?
      @education_students = EducationStudent.all
      @education_students = @education_students.where(education_school_id: params[:education_school_id]) if params[:education_school_id].present?
      @education_students = @education_students.includes(:education_classes).where(education_classes: {id: params[:education_class_id] }) if params[:education_class_id].present?
    else
      @education_schools = current_user.education_schools
      @education_students = EducationStudent.where(education_school: @education_schools)
    end
    @pagy, @education_students = pagy(@education_students)
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
    @education_student = EducationStudent.new(education_student_params)

    respond_to do |format|
      if @education_student.save
        format.html { redirect_to @education_student, notice: "Education student was successfully created." }
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
      params.require(:education_student).permit(:user_id, :name)
    end
end

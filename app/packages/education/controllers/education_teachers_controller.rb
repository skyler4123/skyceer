class EducationTeachersController < EducationsController
  before_action :set_education_teacher, only: %i[ show edit update destroy ]

  # GET /education_teachers or /education_teachers.json
  def index
    @education_teachers = EducationTeacher.all
    @pagy, @education_teachers = pagy(@education_teachers)
  end

  # GET /education_teachers/1 or /education_teachers/1.json
  def show
  end

  # GET /education_teachers/new
  def new
    @education_teacher = EducationTeacher.new
  end

  # GET /education_teachers/1/edit
  def edit
  end

  # POST /education_teachers or /education_teachers.json
  def create
    @teacher_user = User.find_by(email: params[:education_teacher][:email])
    # @education_teacher = EducationTeachers.build(education_teacher_params)
    @education_teacher = EducationTeacher.build(user: @teacher_user, education_school: @education_school)

    respond_to do |format|
      if @education_teacher.save
        format.html { redirect_to @education_teacher, notice: "Education teacher was successfully created." }
        format.json { render :show, status: :created, location: @education_teacher }
      else
        format.html { render :new, status: :unprocessable_entity }
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
      params.require(:education_teacher).permit(:user_id, :name)
    end
end

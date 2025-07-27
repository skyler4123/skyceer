class EducationOwner::EducationClassesController < EducationOwner::EducationsController
  before_action :set_education_class, only: %i[ edit update destroy ]

  # GET /education_classes or /education_classes.json
  def index
    # get education_schools from id params when it exists instead of current_education_school
    @education_schools = EducationSchool.find(params[:education_school_id]) if params[:education_school_id].present?
    @education_classes = EducationClass.where(education_school: @education_schools)
    @pagination, @education_classes = pagy(@education_classes)
    @json_data = {
      education_classes: @education_classes.as_json(only: %i[id education_school_id education_course_id name discarded_at created_at updated_at], include: { education_school: { only: %i[id name] } }),
    }.to_json
  end

  # GET /education_classes/new
  def new
    @education_class = EducationClass.new
    @education_courses = EducationCourse.where(education_school: @education_schools)
  end

  # GET /education_classes/1/edit
  def edit
    @education_courses = EducationCourse.where(education_school: @education_schools)
    @education_subjects = EducationSubject.where(education_school: @education_class.education_school)
    @education_teachers = EducationTeacher.joins(:education_schools).where(education_schools: @education_schools)
    @education_subject_appointments = EducationSubjectAppointment.where(education_class: @education_class)
    @json_data = {
      education_class: @education_class.as_json(include: { education_categories: { only: %i[id name] }, education_school: { only: %i[id name] }, education_course: { only: %i[id name] }, education_subjects: { only: %i[id name] } }),
      education_courses: @education_courses.as_json(only: %i[id name]),
      education_categories: @education_categories.as_json(only: %i[id name]),
      education_schools: @education_schools.as_json(only: %i[id name]),
      education_subjects: @education_subjects.as_json(only: %i[id name], include: { education_teachers: { only: %i[id name] } }),
      education_subject_appointments: @education_subject_appointments.as_json,
      education_teachers: @education_teachers.as_json(only: %i[id name]),
    }.to_json
  end

  # POST /education_classes or /education_classes.json
  def create
    @education_class = EducationClass.new(education_class_params)

    respond_to do |format|
      if @education_class.save
        if params[:education_class][:education_category_id].present?
          education_categories = EducationCategory.where(id: params[:education_class][:education_category_id])
          @education_class.education_categories = education_categories
        end

        format.html { redirect_to edit_education_class_path(@education_class), notice: CREATED_SUCCESS_MESSAGE }
        format.json { render :show, status: :created, location: @education_class }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_class.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_classes/1 or /education_classes/1.json
  def update
    respond_to do |format|
      if @education_class.update(education_class_params)
        if params[:education_class][:education_category_id].present?
          education_categories = EducationCategory.where(id: params[:education_class][:education_category_id])
          @education_class.education_categories = education_categories
        end
        
        format.html { redirect_to edit_education_class_path(@education_class), notice: UPDATED_SUCCESS_MESSAGE }
        format.json { render :show, status: :ok, location: @education_class }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_class.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_classes/1 or /education_classes/1.json
  def destroy
    @education_class.destroy!

    respond_to do |format|
      format.html { redirect_to education_classes_path, status: :see_other, notice: DELETED_SUCCESS_MESSAGE }
      format.json { head :no_content }
    end
  end

  def appoint_subject
    @education_class = EducationClass.find(params[:id])
    @education_subject = EducationSubject.find(params[:education_subject_appointment][:education_subject_id])
    @education_teacher = EducationTeacher.find(params[:education_subject_appointment][:appoint_from_id])
    @education_subject_appointment = EducationSubjectAppointment.new(
      education_subject: @education_subject,
      education_class: @education_class,
      education_teacher: @education_teacher,
    )
    respond_to do |format|
      if @education_subject_appointment.save
        format.html { redirect_to edit_education_class_path(@education_class), notice: UPDATED_SUCCESS_MESSAGE }
      else
        format.html { redirect_to edit_education_class_path(@education_class), error: @education_subject_appointment.errors.full_messages }
      end
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_education_class
    @education_class = EducationClass.find(params.expect(:id))
  end

  # Only allow a list of trusted parameters through.
  def education_class_params
    params.expect(education_class: [ :education_school_id, :education_course_id, :name ])
  end
end

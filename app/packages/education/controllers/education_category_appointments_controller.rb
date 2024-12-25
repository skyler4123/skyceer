class EducationCategoryAppointmentsController < EducationsController
  before_action :set_education_category_appointment, only: %i[ show edit update destroy ]

  # GET /education_category_appointments or /education_category_appointments.json
  def index
    @education_category_appointments = EducationCategoryAppointment.all
  end

  # GET /education_category_appointments/1 or /education_category_appointments/1.json
  def show
  end

  # GET /education_category_appointments/new
  def new
    @education_category_appointment = EducationCategoryAppointment.new
  end

  # GET /education_category_appointments/1/edit
  def edit
  end

  # POST /education_category_appointments or /education_category_appointments.json
  def create
    @education_category_appointment = EducationCategoryAppointment.new(education_category_appointment_params)

    respond_to do |format|
      if @education_category_appointment.save
        format.html { redirect_to @education_category_appointment, notice: "Education category appointment was successfully created." }
        format.json { render :show, status: :created, location: @education_category_appointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_category_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_category_appointments/1 or /education_category_appointments/1.json
  def update
    respond_to do |format|
      if @education_category_appointment.update(education_category_appointment_params)
        format.html { redirect_to @education_category_appointment, notice: "Education category appointment was successfully updated." }
        format.json { render :show, status: :ok, location: @education_category_appointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_category_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_category_appointments/1 or /education_category_appointments/1.json
  def destroy
    @education_category_appointment.destroy!

    respond_to do |format|
      format.html { redirect_to education_category_appointments_path, status: :see_other, notice: "Education category appointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_category_appointment
      @education_category_appointment = EducationCategoryAppointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def education_category_appointment_params
      params.expect(education_category_appointment: [ :education_category_id, :education_class_id, :education_room_id, :education_teacher_id, :education_student_id, :education_subject_id, :education_course_id, :education_exam_id, :education_question_id, :education_lesson_id, :education_shift_id, :level ])
    end
end

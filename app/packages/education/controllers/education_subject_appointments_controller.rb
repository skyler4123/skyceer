class EducationSubjectAppointmentsController < EducationsController
  before_action :set_education_subject_appointment, only: %i[ show edit update destroy ]

  # GET /education_subject_appointments or /education_subject_appointments.json
  def index
    @education_subject_appointments = EducationSubjectAppointment.all
  end

  # GET /education_subject_appointments/1 or /education_subject_appointments/1.json
  def show
  end

  # GET /education_subject_appointments/new
  def new
    @education_subject_appointment = EducationSubjectAppointment.new
  end

  # GET /education_subject_appointments/1/edit
  def edit
  end

  # POST /education_subject_appointments or /education_subject_appointments.json
  def create
    @education_subject_appointment = EducationSubjectAppointment.new(education_subject_appointment_params)

    respond_to do |format|
      if @education_subject_appointment.save
        format.html { redirect_to @education_subject_appointment, notice: "Education subject appointment was successfully created." }
        format.json { render :show, status: :created, location: @education_subject_appointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_subject_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_subject_appointments/1 or /education_subject_appointments/1.json
  def update
    respond_to do |format|
      if @education_subject_appointment.update(education_subject_appointment_params)
        format.html { redirect_to @education_subject_appointment, notice: "Education subject appointment was successfully updated." }
        format.json { render :show, status: :ok, location: @education_subject_appointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_subject_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_subject_appointments/1 or /education_subject_appointments/1.json
  def destroy
    @education_subject_appointment.destroy!

    respond_to do |format|
      format.html { redirect_to education_subject_appointments_path, status: :see_other, notice: "Education subject appointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_subject_appointment
      @education_subject_appointment = EducationSubjectAppointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def education_subject_appointment_params
      params.expect(education_subject_appointment: [ :education_subject_id, :education_class_id, :education_teacher_id ])
    end
end

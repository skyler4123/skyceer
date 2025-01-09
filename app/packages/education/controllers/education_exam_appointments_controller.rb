class EducationExamAppointmentsController < EducationsController
  before_action :set_education_exam_appointment, only: %i[ show edit update destroy ]

  # GET /education_exam_appointments or /education_exam_appointments.json
  def index
    @education_exam_appointments = EducationExamAppointment.all
  end

  # GET /education_exam_appointments/1 or /education_exam_appointments/1.json
  def show
  end

  # GET /education_exam_appointments/new
  def new
    @education_exam_appointment = EducationExamAppointment.new
  end

  # GET /education_exam_appointments/1/edit
  def edit
  end

  # POST /education_exam_appointments or /education_exam_appointments.json
  def create
    @education_exam_appointment = EducationExamAppointment.new(education_exam_appointment_params)

    respond_to do |format|
      if @education_exam_appointment.save
        format.html { redirect_to @education_exam_appointment, notice: "Education exam appointment was successfully created." }
        format.json { render :show, status: :created, location: @education_exam_appointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_exam_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_exam_appointments/1 or /education_exam_appointments/1.json
  def update
    respond_to do |format|
      if @education_exam_appointment.update(education_exam_appointment_params)
        format.html { redirect_to @education_exam_appointment, notice: "Education exam appointment was successfully updated." }
        format.json { render :show, status: :ok, location: @education_exam_appointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_exam_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_exam_appointments/1 or /education_exam_appointments/1.json
  def destroy
    @education_exam_appointment.destroy!

    respond_to do |format|
      format.html { redirect_to education_exam_appointments_path, status: :see_other, notice: "Education exam appointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_exam_appointment
      @education_exam_appointment = EducationExamAppointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def education_exam_appointment_params
      params.expect(education_exam_appointment: [ :education_exam_id, :education_exam_appointmentable_id, :education_exam_appointmentable_type, :score, :status ])
    end
end

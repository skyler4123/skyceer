class EducationClassAppointmentsController < EducationsController
  before_action :set_education_class_appointment, only: %i[ show edit update destroy ]

  # GET /education_class_appointments or /education_class_appointments.json
  def index
    @education_class_appointments = EducationClassAppointment.all
  end

  # GET /education_class_appointments/1 or /education_class_appointments/1.json
  def show
  end

  # GET /education_class_appointments/new
  def new
    @education_class_appointment = EducationClassAppointment.new
  end

  # GET /education_class_appointments/1/edit
  def edit
  end

  # POST /education_class_appointments or /education_class_appointments.json
  def create
    @education_class_appointment = EducationClassAppointment.new(education_class_appointment_params)

    respond_to do |format|
      if @education_class_appointment.save
        format.html { redirect_to @education_class_appointment, notice: "Education class appointment was successfully created." }
        format.json { render :show, status: :created, location: @education_class_appointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_class_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_class_appointments/1 or /education_class_appointments/1.json
  def update
    respond_to do |format|
      if @education_class_appointment.update(education_class_appointment_params)
        format.html { redirect_to @education_class_appointment, notice: "Education class appointment was successfully updated." }
        format.json { render :show, status: :ok, location: @education_class_appointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_class_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_class_appointments/1 or /education_class_appointments/1.json
  def destroy
    @education_class_appointment.destroy!

    respond_to do |format|
      format.html { redirect_to education_class_appointments_path, status: :see_other, notice: "Education class appointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_class_appointment
      @education_class_appointment = EducationClassAppointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def education_class_appointment_params
      params.expect(education_class_appointment: [ :education_class_id, :education_class_appointmentable_id, :education_class_appointmentable_type ])
    end
end

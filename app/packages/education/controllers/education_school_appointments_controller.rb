class EducationSchoolAppointmentsController < ApplicationController
  before_action :set_education_school_appointment, only: %i[ show edit update destroy ]

  # GET /education_school_appointments or /education_school_appointments.json
  def index
    @education_school_appointments = EducationSchoolAppointment.all
  end

  # GET /education_school_appointments/1 or /education_school_appointments/1.json
  def show
  end

  # GET /education_school_appointments/new
  def new
    @education_school_appointment = EducationSchoolAppointment.new
  end

  # GET /education_school_appointments/1/edit
  def edit
  end

  # POST /education_school_appointments or /education_school_appointments.json
  def create
    @education_school_appointment = EducationSchoolAppointment.new(education_school_appointment_params)

    respond_to do |format|
      if @education_school_appointment.save
        format.html { redirect_to @education_school_appointment, notice: "Education school appointment was successfully created." }
        format.json { render :show, status: :created, location: @education_school_appointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_school_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_school_appointments/1 or /education_school_appointments/1.json
  def update
    respond_to do |format|
      if @education_school_appointment.update(education_school_appointment_params)
        format.html { redirect_to @education_school_appointment, notice: "Education school appointment was successfully updated." }
        format.json { render :show, status: :ok, location: @education_school_appointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_school_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_school_appointments/1 or /education_school_appointments/1.json
  def destroy
    @education_school_appointment.destroy!

    respond_to do |format|
      format.html { redirect_to education_school_appointments_path, status: :see_other, notice: "Education school appointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_school_appointment
      @education_school_appointment = EducationSchoolAppointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def education_school_appointment_params
      params.expect(education_school_appointment: [ :education_school_id, :education_admin_id, :education_teacher_id, :education_student_id ])
    end
end

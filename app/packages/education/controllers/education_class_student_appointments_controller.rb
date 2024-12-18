class EducationClassStudentAppointmentsController < ApplicationController
  before_action :set_education_class_student_appointment, only: %i[ show edit update destroy ]

  # GET /education_class_student_appointments or /education_class_student_appointments.json
  def index
    @education_class_student_appointments = EducationClassStudentAppointment.all
  end

  # GET /education_class_student_appointments/1 or /education_class_student_appointments/1.json
  def show
  end

  # GET /education_class_student_appointments/new
  def new
    @education_class_student_appointment = EducationClassStudentAppointment.new
  end

  # GET /education_class_student_appointments/1/edit
  def edit
  end

  # POST /education_class_student_appointments or /education_class_student_appointments.json
  def create
    @education_class_student_appointment = EducationClassStudentAppointment.new(education_class_student_appointment_params)

    respond_to do |format|
      if @education_class_student_appointment.save
        format.html { redirect_to @education_class_student_appointment, notice: "Education class student appointment was successfully created." }
        format.json { render :show, status: :created, location: @education_class_student_appointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_class_student_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_class_student_appointments/1 or /education_class_student_appointments/1.json
  def update
    respond_to do |format|
      if @education_class_student_appointment.update(education_class_student_appointment_params)
        format.html { redirect_to @education_class_student_appointment, notice: "Education class student appointment was successfully updated." }
        format.json { render :show, status: :ok, location: @education_class_student_appointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_class_student_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_class_student_appointments/1 or /education_class_student_appointments/1.json
  def destroy
    @education_class_student_appointment.destroy!

    respond_to do |format|
      format.html { redirect_to education_class_student_appointments_path, status: :see_other, notice: "Education class student appointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_class_student_appointment
      @education_class_student_appointment = EducationClassStudentAppointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def education_class_student_appointment_params
      params.expect(education_class_student_appointment: [ :education_class_id, :education_student_id ])
    end
end

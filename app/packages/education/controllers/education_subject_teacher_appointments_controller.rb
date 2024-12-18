class EducationSubjectTeacherAppointmentsController < ApplicationController
  before_action :set_education_subject_teacher_appointment, only: %i[ show edit update destroy ]

  # GET /education_subject_teacher_appointments or /education_subject_teacher_appointments.json
  def index
    @education_subject_teacher_appointments = EducationSubjectTeacherAppointment.all
  end

  # GET /education_subject_teacher_appointments/1 or /education_subject_teacher_appointments/1.json
  def show
  end

  # GET /education_subject_teacher_appointments/new
  def new
    @education_subject_teacher_appointment = EducationSubjectTeacherAppointment.new
  end

  # GET /education_subject_teacher_appointments/1/edit
  def edit
  end

  # POST /education_subject_teacher_appointments or /education_subject_teacher_appointments.json
  def create
    @education_subject_teacher_appointment = EducationSubjectTeacherAppointment.new(education_subject_teacher_appointment_params)

    respond_to do |format|
      if @education_subject_teacher_appointment.save
        format.html { redirect_to @education_subject_teacher_appointment, notice: "Education subject teacher appointment was successfully created." }
        format.json { render :show, status: :created, location: @education_subject_teacher_appointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_subject_teacher_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_subject_teacher_appointments/1 or /education_subject_teacher_appointments/1.json
  def update
    respond_to do |format|
      if @education_subject_teacher_appointment.update(education_subject_teacher_appointment_params)
        format.html { redirect_to @education_subject_teacher_appointment, notice: "Education subject teacher appointment was successfully updated." }
        format.json { render :show, status: :ok, location: @education_subject_teacher_appointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_subject_teacher_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_subject_teacher_appointments/1 or /education_subject_teacher_appointments/1.json
  def destroy
    @education_subject_teacher_appointment.destroy!

    respond_to do |format|
      format.html { redirect_to education_subject_teacher_appointments_path, status: :see_other, notice: "Education subject teacher appointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_subject_teacher_appointment
      @education_subject_teacher_appointment = EducationSubjectTeacherAppointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def education_subject_teacher_appointment_params
      params.expect(education_subject_teacher_appointment: [ :education_subject_id, :education_teacher_id ])
    end
end

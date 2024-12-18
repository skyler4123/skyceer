class EducationClassRoomAppointmentsController < ApplicationController
  before_action :set_education_class_room_appointment, only: %i[ show edit update destroy ]

  # GET /education_class_room_appointments or /education_class_room_appointments.json
  def index
    @education_class_room_appointments = EducationClassRoomAppointment.all
  end

  # GET /education_class_room_appointments/1 or /education_class_room_appointments/1.json
  def show
  end

  # GET /education_class_room_appointments/new
  def new
    @education_class_room_appointment = EducationClassRoomAppointment.new
  end

  # GET /education_class_room_appointments/1/edit
  def edit
  end

  # POST /education_class_room_appointments or /education_class_room_appointments.json
  def create
    @education_class_room_appointment = EducationClassRoomAppointment.new(education_class_room_appointment_params)

    respond_to do |format|
      if @education_class_room_appointment.save
        format.html { redirect_to @education_class_room_appointment, notice: "Education class room appointment was successfully created." }
        format.json { render :show, status: :created, location: @education_class_room_appointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_class_room_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_class_room_appointments/1 or /education_class_room_appointments/1.json
  def update
    respond_to do |format|
      if @education_class_room_appointment.update(education_class_room_appointment_params)
        format.html { redirect_to @education_class_room_appointment, notice: "Education class room appointment was successfully updated." }
        format.json { render :show, status: :ok, location: @education_class_room_appointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_class_room_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_class_room_appointments/1 or /education_class_room_appointments/1.json
  def destroy
    @education_class_room_appointment.destroy!

    respond_to do |format|
      format.html { redirect_to education_class_room_appointments_path, status: :see_other, notice: "Education class room appointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_class_room_appointment
      @education_class_room_appointment = EducationClassRoomAppointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def education_class_room_appointment_params
      params.expect(education_class_room_appointment: [ :education_class_id, :education_room_id ])
    end
end

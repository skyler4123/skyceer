class Api::ProjectSubticketAppointmentsController < Api::ApplicationController
  before_action :set_project_subticket_appointment, only: %i[ show edit update destroy ]

  # GET /project_subticket_appointments or /project_subticket_appointments.json
  def index
    @project_subticket_appointments = ProjectSubticketAppointment.all
  end

  # GET /project_subticket_appointments/1 or /project_subticket_appointments/1.json
  def show
  end

  # GET /project_subticket_appointments/new
  def new
    @project_subticket_appointment = ProjectSubticketAppointment.new
  end

  # GET /project_subticket_appointments/1/edit
  def edit
  end

  # POST /project_subticket_appointments or /project_subticket_appointments.json
  def create
    @project_subticket_appointment = ProjectSubticketAppointment.new(project_subticket_appointment_params)

    respond_to do |format|
      if @project_subticket_appointment.save
        format.html { redirect_to @project_subticket_appointment, notice: "Project subticket apointment was successfully created." }
        format.json { render :show, status: :created, location: @project_subticket_appointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @project_subticket_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /project_subticket_appointments/1 or /project_subticket_appointments/1.json
  def update
    respond_to do |format|
      if @project_subticket_appointment.update(project_subticket_appointment_params)
        format.html { redirect_to @project_subticket_appointment, notice: "Project subticket apointment was successfully updated." }
        format.json { render :show, status: :ok, location: @project_subticket_appointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @project_subticket_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /project_subticket_appointments/1 or /project_subticket_appointments/1.json
  def destroy
    @project_subticket_appointment.destroy!

    respond_to do |format|
      format.html { redirect_to project_subticket_appointments_path, status: :see_other, notice: "Project subticket apointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_subticket_appointment
      @project_subticket_appointment = ProjectSubticketAppointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def project_subticket_appointment_params
      params.expect(project_subticket_appointment: [ :project_subticket_id, :appoint_to_id, :appoint_to_type ])
    end
end

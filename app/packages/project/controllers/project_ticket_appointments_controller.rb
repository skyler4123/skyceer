class ProjectTicketAppointmentsController < ApplicationController
  before_action :set_project_ticket_appointment, only: %i[ show edit update destroy ]

  # GET /project_ticket_appointments or /project_ticket_appointments.json
  def index
    @project_ticket_appointments = ProjectTicketApointment.all
  end

  # GET /project_ticket_appointments/1 or /project_ticket_appointments/1.json
  def show
  end

  # GET /project_ticket_appointments/new
  def new
    @project_ticket_appointment = ProjectTicketApointment.new
  end

  # GET /project_ticket_appointments/1/edit
  def edit
  end

  # POST /project_ticket_appointments or /project_ticket_appointments.json
  def create
    @project_ticket_appointment = ProjectTicketApointment.new(project_ticket_appointment_params)

    respond_to do |format|
      if @project_ticket_appointment.save
        format.html { redirect_to @project_ticket_appointment, notice: "Project ticket apointment was successfully created." }
        format.json { render :show, status: :created, location: @project_ticket_appointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @project_ticket_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /project_ticket_appointments/1 or /project_ticket_appointments/1.json
  def update
    respond_to do |format|
      if @project_ticket_appointment.update(project_ticket_appointment_params)
        format.html { redirect_to @project_ticket_appointment, notice: "Project ticket apointment was successfully updated." }
        format.json { render :show, status: :ok, location: @project_ticket_appointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @project_ticket_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /project_ticket_appointments/1 or /project_ticket_appointments/1.json
  def destroy
    @project_ticket_appointment.destroy!

    respond_to do |format|
      format.html { redirect_to project_ticket_appointments_path, status: :see_other, notice: "Project ticket apointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_ticket_appointment
      @project_ticket_appointment = ProjectTicketApointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def project_ticket_appointment_params
      params.expect(project_ticket_appointment: [ :project_ticket_id, :appoint_to_id, :appoint_to_type ])
    end
end

class ProjectSubtaskAppointmentsController < ApplicationController
  before_action :set_project_subtask_appointment, only: %i[ show edit update destroy ]

  # GET /project_subtask_appointments or /project_subtask_appointments.json
  def index
    @project_subtask_appointments = ProjectSubtaskAppointment.all
  end

  # GET /project_subtask_appointments/1 or /project_subtask_appointments/1.json
  def show
  end

  # GET /project_subtask_appointments/new
  def new
    @project_subtask_appointment = ProjectSubtaskAppointment.new
  end

  # GET /project_subtask_appointments/1/edit
  def edit
  end

  # POST /project_subtask_appointments or /project_subtask_appointments.json
  def create
    @project_subtask_appointment = ProjectSubtaskAppointment.new(project_subtask_appointment_params)

    respond_to do |format|
      if @project_subtask_appointment.save
        format.html { redirect_to @project_subtask_appointment, notice: "Project subtask apointment was successfully created." }
        format.json { render :show, status: :created, location: @project_subtask_appointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @project_subtask_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /project_subtask_appointments/1 or /project_subtask_appointments/1.json
  def update
    respond_to do |format|
      if @project_subtask_appointment.update(project_subtask_appointment_params)
        format.html { redirect_to @project_subtask_appointment, notice: "Project subtask apointment was successfully updated." }
        format.json { render :show, status: :ok, location: @project_subtask_appointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @project_subtask_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /project_subtask_appointments/1 or /project_subtask_appointments/1.json
  def destroy
    @project_subtask_appointment.destroy!

    respond_to do |format|
      format.html { redirect_to project_subtask_appointments_path, status: :see_other, notice: "Project subtask apointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_subtask_appointment
      @project_subtask_appointment = ProjectSubtaskAppointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def project_subtask_appointment_params
      params.expect(project_subtask_appointment: [ :project_subtask_id, :appoint_to_id, :appoint_to_type ])
    end
end

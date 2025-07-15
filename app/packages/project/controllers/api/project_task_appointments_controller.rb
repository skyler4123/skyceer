class Api::ProjectTaskAppointmentsController < Api::ApplicationController
  before_action :set_project_task_appointment, only: %i[ show edit update destroy ]

  # GET /project_task_appointments or /project_task_appointments.json
  def index
    @project_task_appointments = ProjectTaskAppointment.all
  end

  # GET /project_task_appointments/1 or /project_task_appointments/1.json
  def show
  end

  # GET /project_task_appointments/new
  def new
    @project_task_appointment = ProjectTaskAppointment.new
  end

  # GET /project_task_appointments/1/edit
  def edit
  end

  # POST /project_task_appointments or /project_task_appointments.json
  def create
    @project_task_appointment = ProjectTaskAppointment.new(project_task_appointment_params)

    respond_to do |format|
      if @project_task_appointment.save
        format.html { redirect_to @project_task_appointment, notice: "Project task apointment was successfully created." }
        format.json { render :show, status: :created, location: @project_task_appointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @project_task_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /project_task_appointments/1 or /project_task_appointments/1.json
  def update
    respond_to do |format|
      if @project_task_appointment.update(project_task_appointment_params)
        format.html { redirect_to @project_task_appointment, notice: "Project task apointment was successfully updated." }
        format.json { render :show, status: :ok, location: @project_task_appointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @project_task_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /project_task_appointments/1 or /project_task_appointments/1.json
  def destroy
    @project_task_appointment.destroy!

    respond_to do |format|
      format.html { redirect_to project_task_appointments_path, status: :see_other, notice: "Project task apointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_task_appointment
      @project_task_appointment = ProjectTaskAppointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def project_task_appointment_params
      params.expect(project_task_appointment: [ :project_task_id, :appoint_to_id, :appoint_to_type ])
    end
end

class Api::ProjectCategoryAppointmentsController < Api::ApplicationController
  before_action :set_project_category_appointment, only: %i[ show edit update destroy ]

  # GET /project_category_appointments or /project_category_appointments.json
  def index
    @project_category_appointments = ProjectCategoryAppointment.all
  end

  # GET /project_category_appointments/1 or /project_category_appointments/1.json
  def show
  end

  # GET /project_category_appointments/new
  def new
    @project_category_appointment = ProjectCategoryAppointment.new
  end

  # GET /project_category_appointments/1/edit
  def edit
  end

  # POST /project_category_appointments or /project_category_appointments.json
  def create
    @project_category_appointment = ProjectCategoryAppointment.new(project_category_appointment_params)

    respond_to do |format|
      if @project_category_appointment.save
        format.html { redirect_to @project_category_appointment, notice: "Project category appointment was successfully created." }
        format.json { render :show, status: :created, location: @project_category_appointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @project_category_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /project_category_appointments/1 or /project_category_appointments/1.json
  def update
    respond_to do |format|
      if @project_category_appointment.update(project_category_appointment_params)
        format.html { redirect_to @project_category_appointment, notice: "Project category appointment was successfully updated." }
        format.json { render :show, status: :ok, location: @project_category_appointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @project_category_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /project_category_appointments/1 or /project_category_appointments/1.json
  def destroy
    @project_category_appointment.destroy!

    respond_to do |format|
      format.html { redirect_to project_category_appointments_path, status: :see_other, notice: "Project category appointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_category_appointment
      @project_category_appointment = ProjectCategoryAppointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def project_category_appointment_params
      params.expect(project_category_appointment: [ :project_category_id, :appoint_to_id, :appoint_to_type ])
    end
end

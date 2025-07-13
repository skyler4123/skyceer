class ProjectGroupApointmentsController < ApplicationController
  before_action :set_project_group_apointment, only: %i[ show edit update destroy ]

  # GET /project_group_apointments or /project_group_apointments.json
  def index
    @project_group_apointments = ProjectGroupAppointment.all
  end

  # GET /project_group_apointments/1 or /project_group_apointments/1.json
  def show
  end

  # GET /project_group_apointments/new
  def new
    @project_group_apointment = ProjectGroupAppointment.new
  end

  # GET /project_group_apointments/1/edit
  def edit
  end

  # POST /project_group_apointments or /project_group_apointments.json
  def create
    @project_group_apointment = ProjectGroupAppointment.new(project_group_apointment_params)

    respond_to do |format|
      if @project_group_apointment.save
        format.html { redirect_to @project_group_apointment, notice: "Project group apointment was successfully created." }
        format.json { render :show, status: :created, location: @project_group_apointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @project_group_apointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /project_group_apointments/1 or /project_group_apointments/1.json
  def update
    respond_to do |format|
      if @project_group_apointment.update(project_group_apointment_params)
        format.html { redirect_to @project_group_apointment, notice: "Project group apointment was successfully updated." }
        format.json { render :show, status: :ok, location: @project_group_apointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @project_group_apointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /project_group_apointments/1 or /project_group_apointments/1.json
  def destroy
    @project_group_apointment.destroy!

    respond_to do |format|
      format.html { redirect_to project_group_apointments_path, status: :see_other, notice: "Project group apointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_group_apointment
      @project_group_apointment = ProjectGroupAppointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def project_group_apointment_params
      params.expect(project_group_apointment: [ :project_group_id, :appoint_to_id, :appoint_to_type ])
    end
end

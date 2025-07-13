class ProjectSubticketApointmentsController < ApplicationController
  before_action :set_project_subticket_apointment, only: %i[ show edit update destroy ]

  # GET /project_subticket_apointments or /project_subticket_apointments.json
  def index
    @project_subticket_apointments = ProjectSubticketApointment.all
  end

  # GET /project_subticket_apointments/1 or /project_subticket_apointments/1.json
  def show
  end

  # GET /project_subticket_apointments/new
  def new
    @project_subticket_apointment = ProjectSubticketApointment.new
  end

  # GET /project_subticket_apointments/1/edit
  def edit
  end

  # POST /project_subticket_apointments or /project_subticket_apointments.json
  def create
    @project_subticket_apointment = ProjectSubticketApointment.new(project_subticket_apointment_params)

    respond_to do |format|
      if @project_subticket_apointment.save
        format.html { redirect_to @project_subticket_apointment, notice: "Project subticket apointment was successfully created." }
        format.json { render :show, status: :created, location: @project_subticket_apointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @project_subticket_apointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /project_subticket_apointments/1 or /project_subticket_apointments/1.json
  def update
    respond_to do |format|
      if @project_subticket_apointment.update(project_subticket_apointment_params)
        format.html { redirect_to @project_subticket_apointment, notice: "Project subticket apointment was successfully updated." }
        format.json { render :show, status: :ok, location: @project_subticket_apointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @project_subticket_apointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /project_subticket_apointments/1 or /project_subticket_apointments/1.json
  def destroy
    @project_subticket_apointment.destroy!

    respond_to do |format|
      format.html { redirect_to project_subticket_apointments_path, status: :see_other, notice: "Project subticket apointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_subticket_apointment
      @project_subticket_apointment = ProjectSubticketApointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def project_subticket_apointment_params
      params.expect(project_subticket_apointment: [ :project_subticket_id, :appoint_to_id, :appoint_to_type ])
    end
end

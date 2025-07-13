class ProjectSubticketsController < ApplicationController
  before_action :set_project_subticket, only: %i[ show edit update destroy ]

  # GET /project_subtickets or /project_subtickets.json
  def index
    @project_subtickets = ProjectSubticket.all
  end

  # GET /project_subtickets/1 or /project_subtickets/1.json
  def show
  end

  # GET /project_subtickets/new
  def new
    @project_subticket = ProjectSubticket.new
  end

  # GET /project_subtickets/1/edit
  def edit
  end

  # POST /project_subtickets or /project_subtickets.json
  def create
    @project_subticket = ProjectSubticket.new(project_subticket_params)

    respond_to do |format|
      if @project_subticket.save
        format.html { redirect_to @project_subticket, notice: "Project subticket was successfully created." }
        format.json { render :show, status: :created, location: @project_subticket }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @project_subticket.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /project_subtickets/1 or /project_subtickets/1.json
  def update
    respond_to do |format|
      if @project_subticket.update(project_subticket_params)
        format.html { redirect_to @project_subticket, notice: "Project subticket was successfully updated." }
        format.json { render :show, status: :ok, location: @project_subticket }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @project_subticket.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /project_subtickets/1 or /project_subtickets/1.json
  def destroy
    @project_subticket.destroy!

    respond_to do |format|
      format.html { redirect_to project_subtickets_path, status: :see_other, notice: "Project subticket was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_subticket
      @project_subticket = ProjectSubticket.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def project_subticket_params
      params.expect(project_subticket: [ :project_ticket_id, :name, :description, :status ])
    end
end

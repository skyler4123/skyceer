class ProjectSubtasksController < ApplicationController
  before_action :set_project_subtask, only: %i[ show edit update destroy ]

  # GET /project_subtasks or /project_subtasks.json
  def index
    @project_subtasks = ProjectSubtask.all
  end

  # GET /project_subtasks/1 or /project_subtasks/1.json
  def show
  end

  # GET /project_subtasks/new
  def new
    @project_subtask = ProjectSubtask.new
  end

  # GET /project_subtasks/1/edit
  def edit
  end

  # POST /project_subtasks or /project_subtasks.json
  def create
    @project_subtask = ProjectSubtask.new(project_subtask_params)

    respond_to do |format|
      if @project_subtask.save
        format.html { redirect_to @project_subtask, notice: "Project subtask was successfully created." }
        format.json { render :show, status: :created, location: @project_subtask }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @project_subtask.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /project_subtasks/1 or /project_subtasks/1.json
  def update
    respond_to do |format|
      if @project_subtask.update(project_subtask_params)
        format.html { redirect_to @project_subtask, notice: "Project subtask was successfully updated." }
        format.json { render :show, status: :ok, location: @project_subtask }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @project_subtask.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /project_subtasks/1 or /project_subtasks/1.json
  def destroy
    @project_subtask.destroy!

    respond_to do |format|
      format.html { redirect_to project_subtasks_path, status: :see_other, notice: "Project subtask was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_subtask
      @project_subtask = ProjectSubtask.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def project_subtask_params
      params.expect(project_subtask: [ :project_task_id, :name, :description, :status ])
    end
end

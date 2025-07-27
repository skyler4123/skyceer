class Api::ProjectTasksController < Api::ApplicationController
  before_action :set_project_task, only: %i[ show edit update destroy ]

  # GET /project_tasks or /project_tasks.json
  def index
    @project_tasks = ProjectTask.all
  end

  # GET /project_tasks/1 or /project_tasks/1.json
  def show
  end

  # GET /project_tasks/new
  def new
    @project_task = ProjectTask.new
  end

  # GET /project_tasks/1/edit
  def edit
  end

  # POST /project_tasks or /project_tasks.json
  def create
    @project_task = ProjectTask.new(project_task_params)

    respond_to do |format|
      if @project_task.save
        format.html { redirect_to @project_task, notice: "Project task was successfully created." }
        format.json { render :show, status: :created, location: @project_task }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @project_task.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /project_tasks/1 or /project_tasks/1.json
  def update
    respond_to do |format|
      if @project_task.update(project_task_params)
        format.html { redirect_to @project_task, notice: "Project task was successfully updated." }
        format.json { render :show, status: :ok, location: @project_task }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @project_task.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /project_tasks/1 or /project_tasks/1.json
  def destroy
    @project_task.destroy!

    respond_to do |format|
      format.html { redirect_to project_tasks_path, status: :see_other, notice: "Project task was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_task
      @project_task = ProjectTask.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def project_task_params
      params.expect(project_task: [ :project_group_id, :name, :description, :status ])
    end
end

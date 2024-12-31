class CalendarGroupsController < ApplicationController
  before_action :set_calendar_group, only: %i[ show edit update destroy ]

  # GET /calendar_groups or /calendar_groups.json
  def index
    @calendar_groups = CalendarGroup.all
  end

  # GET /calendar_groups/1 or /calendar_groups/1.json
  def show
  end

  # GET /calendar_groups/new
  def new
    @calendar_group = CalendarGroup.new
  end

  # GET /calendar_groups/1/edit
  def edit
  end

  # POST /calendar_groups or /calendar_groups.json
  def create
    @calendar_group = CalendarGroup.new(calendar_group_params)

    respond_to do |format|
      if @calendar_group.save
        format.html { redirect_to @calendar_group, notice: "Calendar group was successfully created." }
        format.json { render :show, status: :created, location: @calendar_group }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @calendar_group.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /calendar_groups/1 or /calendar_groups/1.json
  def update
    respond_to do |format|
      if @calendar_group.update(calendar_group_params)
        format.html { redirect_to @calendar_group, notice: "Calendar group was successfully updated." }
        format.json { render :show, status: :ok, location: @calendar_group }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @calendar_group.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /calendar_groups/1 or /calendar_groups/1.json
  def destroy
    @calendar_group.destroy!

    respond_to do |format|
      format.html { redirect_to calendar_groups_path, status: :see_other, notice: "Calendar group was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_calendar_group
      @calendar_group = CalendarGroup.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def calendar_group_params
      params.expect(calendar_group: [ :calendar_user_id, :calendar_groupable_id, :calendar_groupable_type, :name, :color, :borderColor, :backgroundColor, :dragBackgroundColor, :discarded_at ])
    end
end

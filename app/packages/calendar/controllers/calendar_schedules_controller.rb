class CalendarSchedulesController < ApplicationController
  before_action :set_calendar_schedule, only: %i[ show edit update destroy ]

  # GET /calendar_schedules or /calendar_schedules.json
  def index
    @calendar_schedules = CalendarSchedule.all
  end

  # GET /calendar_schedules/1 or /calendar_schedules/1.json
  def show
  end

  # GET /calendar_schedules/new
  def new
    @calendar_schedule = CalendarSchedule.new
  end

  # GET /calendar_schedules/1/edit
  def edit
  end

  # POST /calendar_schedules or /calendar_schedules.json
  def create
    @calendar_schedule = CalendarSchedule.new(calendar_schedule_params)

    respond_to do |format|
      if @calendar_schedule.save
        format.html { redirect_to calendar_schedule_url(@calendar_schedule), notice: "Calendar schedule was successfully created." }
        format.json { render :show, status: :created, location: @calendar_schedule }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @calendar_schedule.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /calendar_schedules/1 or /calendar_schedules/1.json
  def update
    respond_to do |format|
      if @calendar_schedule.update(calendar_schedule_params)
        format.html { redirect_to calendar_schedule_url(@calendar_schedule), notice: "Calendar schedule was successfully updated." }
        format.json { render :show, status: :ok, location: @calendar_schedule }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @calendar_schedule.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /calendar_schedules/1 or /calendar_schedules/1.json
  def destroy
    @calendar_schedule.destroy!

    respond_to do |format|
      format.html { redirect_to calendar_schedules_url, notice: "Calendar schedule was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_calendar_schedule
      @calendar_schedule = CalendarSchedule.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def calendar_schedule_params
      params.require(:calendar_schedule).permit(:calendar_user_id)
    end
end

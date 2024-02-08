class CalendarEventsController < ApplicationController
  before_action :set_calendar_event, only: %i[ show edit update destroy ]

  # GET /calendar_events or /calendar_events.json
  def index
    @calendar_events = CalendarEvent.all
  end

  # GET /calendar_events/1 or /calendar_events/1.json
  def show
  end

  # GET /calendar_events/new
  def new
    @calendar_event = CalendarEvent.new
  end

  # GET /calendar_events/1/edit
  def edit
  end

  # POST /calendar_events or /calendar_events.json
  def create
    @calendar_event = CalendarEvent.new(calendar_event_params)
    @calendar_event.calendar_schedule_id = params[:calendarId]
    @calendar_event.save
    # respond_to do |format|
    #   if @calendar_event.save
    #     format.html { redirect_to calendar_event_url(@calendar_event), notice: "Calendar event was successfully created." }
    #     format.json { render :show, status: :created, location: @calendar_event }
    #   else
    #     format.html { render :new, status: :unprocessable_entity }
    #     format.json { render json: @calendar_event.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # PATCH/PUT /calendar_events/1 or /calendar_events/1.json
  def update
    respond_to do |format|
      if @calendar_event.update(calendar_event_params)
        format.html { redirect_to calendar_event_url(@calendar_event), notice: "Calendar event was successfully updated." }
        format.json { render :show, status: :ok, location: @calendar_event }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @calendar_event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /calendar_events/1 or /calendar_events/1.json
  def destroy
    @calendar_event.destroy!

    respond_to do |format|
      format.html { redirect_to calendar_events_url, notice: "Calendar event was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_calendar_event
      @calendar_event = CalendarEvent.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def calendar_event_params
      params.require(:calendar_event).permit(:calendar_schedule_id, :calendarId, :title, :body, :isAllday, :start, :end, :goingDuration, :comingDuration, :location, :attendees, :category, :recurrenceRule, :state, :isVisible, :isPending, :isFocused, :isReadOnly, :isPrivate, :color, :backgroundColor, :dragBackgroundColor, :borderColor, :customStyle, :raw)
    end
end

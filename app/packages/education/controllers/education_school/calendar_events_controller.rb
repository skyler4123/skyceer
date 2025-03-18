class EducationSchool::CalendarEventsController < EducationSchool::EducationsController
  def index
    @education_classes = EducationClass.where(education_school: @education_schools)
    @calendar_groups = CalendarGroup.where(calendar_groupable: params[:education_class_id]) if params[:education_class_id].present?
    @calendar_events = CalendarEvent.where(calendar_group: @calendar_groups)
    @data = {
      education_classes: @education_classes.as_json(only: %i[id name]),
      calendar_events: @calendar_events.as_json,
    }.to_json
  end

  def create
    debugger
    return
    @calendar_event = CalendarEvent.new(calendar_event_params)

    respond_to do |format|
      if @calendar_event.save
        format.html { redirect_to @calendar_event, notice: "Calendar event was successfully created." }
        format.json { render :show, status: :created, location: @calendar_event }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @calendar_event.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def calendar_event_params
    params.expect(calendar_event: [ :userable_id, :userable_type, :eventable_id, :eventable_type, :library, :title, :body, :isAllday, :start, :end, :goingDuration, :comingDuration, :location, :attendees, :category, :dueDateClass, :recurrenceRule, :state, :isVisible, :isPending, :isFocused, :isReadOnly, :isPrivate, :color, :backgroundColor, :dragBackgroundColor, :borderColor, :customStyle, :raw, :discarded_at ])
  end
end

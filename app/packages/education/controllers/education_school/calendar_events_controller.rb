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

    @calendar_event = CalendarEvent.new(calendar_event_params)
    @calendar_event.calendar_group_id = params[:calendar_event][:education_class_id] if params[:calendar_event][:education_class_id].present?
    respond_to do |format|
      if @calendar_event.save
        request.referer ||= education_school_calendar_events_path(@education_school)
        format.html { redirect_to request.referer, notice: "Calendar event was successfully created." }
        format.json { render :show, status: :created, location: @calendar_event }
      else
        format.html { redirect_to request.referer, status: :unprocessable_entity, alert: "Calendar event was not created." }
        format.json { render json: @calendar_event.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def calendar_event_params
    params.expect(calendar_event: [ :userable_id, :userable_type, :eventable_id, :eventable_type, :library, :title, :body, :isAllday, :start, :end, :goingDuration, :comingDuration, :location, :attendees, :category, :dueDateClass, :recurrenceRule, :state, :isVisible, :isPending, :isFocused, :isReadOnly, :isPrivate, :color, :backgroundColor, :dragBackgroundColor, :borderColor, :customStyle, :raw, :discarded_at ])
  end
end

class EducationOwner::CalendarEventsController < EducationOwner::EducationsController
  def index
    
    @selection_education_classes = EducationClass.where(education_school: @education_schools)
    @education_classes = EducationClass.where(id: params[:education_class_id]) if params[:education_class_id].present?
    @calendar_events = CalendarEvent.where(calendar_groupable: @education_classes)
    @json_data = {
      selection_education_classes: @selection_education_classes.as_json(only: %i[id name]),
      education_classes: @education_classes.as_json(only: %i[id name]),
      calendar_events: @calendar_events.as_json,
    }.to_json
  end

  def create
    @calendar_group = EducationClass.find(params[:calendar_event][:education_class_id]) if params[:calendar_event][:education_class_id].present?
    return redirect_to request.referer, alert: "Please select a class" unless @calendar_group.present?

    @calendar_event = CalendarEvent.new(calendar_event_params)
    @calendar_event.calendar_userable = current_user
    @calendar_event.calendar_groupable = @calendar_group
    respond_to do |format|
      if @calendar_event.save
        format.html { redirect_to request.referer, notice: CREATED_SUCCESS_MESSAGE }
        format.json { render :show, status: :created, location: @calendar_event }
      else
        format.html { redirect_to request.referer, status: :unprocessable_entity, alert: "Calendar event was not created." }
        format.json { render json: @calendar_event.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def calendar_event_params
    params.expect(calendar_event: [:library, :title, :body, :isAllday, :start, :end, :goingDuration, :comingDuration, :location, :attendees, :category, :dueDateClass, :recurrenceRule, :state, :isVisible, :isPending, :isFocused, :isReadOnly, :isPrivate, :color, :backgroundColor, :dragBackgroundColor, :borderColor, :customStyle, :raw, :discarded_at ])
  end
end

class EducationSchool::EducationTimeTablesController < EducationSchool::EducationsController
  def index
    @education_classes = EducationClass.where(education_school: @education_schools)
    # @calendar_events = CalendarEvent.all
    # @calendar_events = CalendarEvent.where(eventable_id: params[:eventable_id]) if params[:eventable_id].present?
    @calendar_events = CalendarEvent.where(eventable_id: params[:education_class_id], eventable_type: "EducationClass") if params[:education_class_id].present?
    @data = {
      education_classes: @education_classes.as_json(only: %i[id name]),
      calendar_events: @calendar_events.as_json,
    }.to_json
  end
end

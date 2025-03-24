class EducationStudent::EducationSchedulesController < EducationStudent::EducationsController

  def index
    @calendar_groups = CalendarGroup.where(calendar_groupable: params[:education_class_id]) if params[:education_class_id].present?
    @calendar_events = CalendarEvent.where(calendar_group: @calendar_groups)
    @data = {
      education_classes: @education_classes.as_json(only: %i[id name]),
      calendar_events: @calendar_events.as_json,
    }.to_json
  end
  
end

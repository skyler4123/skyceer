class EducationTimeTablesController < EducationsController
  def index
    @education_classes = EducationClass.where(education_school: @education_schools)
    @education_shifts = EducationShift.where(education_class: @education_classes)
    @calendar_groups = CalendarGroup.where(calendar_groupable: @education_classes)
    @calendar_events = CalendarEvent.includes(:calendar_groups).where(calendar_eventable: @education_shifts)
  end
end

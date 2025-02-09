class EducationShift::CreateCalendarEventJob < ApplicationJob
  queue_as :default
  self.queue_adapter = :solid_queue
  
  def perform(education_shift_id)
    education_shift = EducationShift.find(education_shift_id)
    userable = education_shift.education_school
    groupable = education_shift.education_class
    eventable = education_shift
    CalendarEvent.create!(
      userable: userable,
      groupable: groupable,
      eventable: eventable,
      library: "tui",
      name: education_shift.name,
      title: education_shift.title,
      body: education_shift.body,
      isAllday: education_shift.isAllday,
      start: education_shift.start,
      end: education_shift.end,
      goingDuration: education_shift.goingDuration,
      comingDuration: education_shift.comingDuration,
      location: education_shift.location,
      attendees: education_shift.attendees,
      category: education_shift.category,
      dueDateClass: education_shift.dueDateClass,
      recurrenceRule: education_shift.recurrenceRule,
      state: education_shift.state,
      isVisible: education_shift.isVisible,
      isPending: education_shift.isPending,
      isFocused: education_shift.isFocused,
      isReadOnly: education_shift.isReadOnly,
      isPrivate: education_shift.isPrivate,
      color: education_shift.color,
      backgroundColor: education_shift.backgroundColor,
      dragBackgroundColor: education_shift.dragBackgroundColor,
      borderColor: education_shift.borderColor,
      customStyle: education_shift.customStyle,
      raw: education_shift.raw,
    )
  end

end

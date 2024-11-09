import Calendar from '@toast-ui/calendar';
import ApplicationController from "../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  static targets= ["calendar"]
  static values = {
    ...super.values,
    schedules: { type: Array },
    events: { type: Array }
  }

  initParams() {
    this.setParams({name: 'variant', defaultValue: 'default'})
    this.setParams({name: 'options', defaultValue: this.optionsParamsDefault()})
    this.setParams({name: 'schedules', defaultValue: this.schedulesParamsDefault()})
    this.setParams({name: 'events', defaultValue: this.eventsParamsDefault()})
  }

  initComplete() {
    if (!this.hasCalendarTarget) {
      this.element.insertAdjacentHTML('beforeend', `<div class="w-full h-full" data-${this.identifier}-target="calendar"></div>`)
    }
    this.calendar = new Calendar(this.calendarTarget, this.options());
    this.schedulesValue = this.schedulesParams
    this.eventsValue = this.eventsParams
    this.initCalendarAction()
  }

  schedulesValueChanged() {
    if (!this.isInitializedValue) { return }
    this.calendar.setCalendars(this.schedulesValue)
  }

  eventsValueChanged() {
    if (!this.isInitializedValue) { return }
    this.calendar.clear()
    this.calendar.createEvents(this.eventsValue)
  }

  initCalendarAction() {
    this.calendar.on('selectDateTime', (event) => {
      this.selectDateTime(event)
    });
    this.calendar.on('beforeCreateEvent', (event) => {
      this.beforeCreateEvent(event)
    });
    this.calendar.on('beforeUpdateEvent', (event) => {
      this.beforeUpdateEvent(event)
    });
    this.calendar.on('beforeDeleteEvent', (event) => {
      this.beforeDeleteEvent(event)
    });
    this.calendar.on('afterRenderEvent', (event) => {
      this.afterRenderEvent(event)
    });
    this.calendar.on('clickDayName', (event) => {
      this.clickDayName(event)
    });
    this.calendar.on('clickEvent', (event) => {
      this.clickEvent(event)
    });
    this.calendar.on('clickMoreEventsBtn', (event) => {
      this.clickMoreEventsBtn(event)
    });
    this.calendar.on('clickTimezoneCollapseBtn', (event) => {
      this.clickTimezoneCollapseBtn(event)
    });
  }

  selectDateTime(event) {console.log(event)}

  beforeCreateEvent(event) {
    // const response = this.Api.calendar_events.post({ params: this.normalizeForBackend(event) })
    // response.then((response) => {
    //   console.log(response)
    //   this.createEvents([event])
    // }).catch(function (error) {
    //   console.log(error);
    // })
  }

  beforeUpdateEvent(event) {
    this.updateEvent(event.event.id, event.event.calendarId, event.changes)
  }

  beforeDeleteEvent(event) {
    this.deleteEvent(event.id, event.calendarId)
  }

  afterRenderEvent(event) {}

  clickDayName(event) {}

  clickEvent(event) {}

  clickMoreEventsBtn(event) {}

  clickTimezoneCollapseBtn(event) {}

  getEvent(eventId, calendarId) {
    return this.calendar.getEvent(eventId, calendarId)
  }

  createEvents(eventsObject) {
    this.calendar.createEvents(eventsObject)
  }

  updateEvent(eventId, calendarId, changes) {
    this.calendar.updateEvent(eventId, calendarId, changes)
  }

  deleteEvent(eventId, calendarId) {
    this.calendar.deleteEvent(eventId, calendarId);
  }

  clear() {
    this.calendar.clear()
  }

  prev() {
    this.calendar.prev()
  }

  next() {
    this.calendar.next()
  }

  changeViewToMonth() {
    this.calendar.changeView('month')
  }

  changeViewToWeek() {
    this.calendar.changeView('week')
  }

  changeViewToDay() {
    this.calendar.changeView('day')
  }

  convertToUTC(event) {
    event.start = event.start.d.d
    event.end = event.end.d.d
    return event
  }

  normalizeForBackend(event) {
    event = { ...event, isVisible: true, lib: 'tui' }
    event = this.convertToUTC(event)
    event = this.changeObjectKey(event, 'calendarId', 'calendarScheduleId')
    event = this.snakeCaseForObjectKey(event)
    return event
  }

  normalizeFromBackend(event) {}

  options() {
    return {
      ...this.optionsParamsDefault(),
      ...this.optionsParams
    }
  }

  variantClass() {
    return {
      default: {
        element: 'w-full h-[800px]'
      }
    }
  }

  optionsParamsDefault() {
    return {
      defaultView: 'month',
      useFormPopup: true,
      useDetailPopup: true,
      isReadOnly: false,
      usageStatistics: false,
      week: {
        startDayOfWeek: 1, // 1=monday, 0=sunday
        dayNames: [],
        narrowWeekend: false,
        workweek: false,
        showNowIndicator: true,
        showTimezoneCollapseButton: false,
        timezonesCollapsed: false,
        hourStart: 0,
        hourEnd: 24,
        eventView: true,
        taskView: true,
        collapseDuplicateEvents: false,
      },
      month: {
        dayNames: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
        visibleWeeksCount: 0,
        workweek: false,
        narrowWeekend: false,
        startDayOfWeek: 1, // 1=monday, 0=sunday
        isAlways6Weeks: true,
        visibleEventCount: 6,
      },
      gridSelection: true,
      timezone: { zones: [] },
      theme: {
        common: {
          dayName: {
            color: '#515ce6',
          },
          saturday: {
            color: 'rgba(255, 64, 64)',
          },
        },
      },
    }
  }

  schedulesParamsDefault() {
    return [
      {
        id: 'cal1',
        name: 'Personal',
        backgroundColor: '#03bd9e',
      },
      {
        id: 'cal2',
        name: 'Work',
        backgroundColor: '#00a9ff',
      },
    ]
  }

  eventsParamsDefault() {
    return [
      {
        id: 'event1',
        calendarId: 'cal1',
        title: 'Weekly meeting for schedule with id = cal1',
        start: new Date().toISOString(),
        end: new Date().toISOString(),
      },
      {
        id: 'event2',
        calendarId: 'cal2',
        title: 'Weekly meeting',
        start: new Date().toISOString(),
        end: new Date().toISOString(),
      }
    ]
  }
}

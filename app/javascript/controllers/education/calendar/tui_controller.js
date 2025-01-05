//  How to use:
//  <div data-controller="libs--calendar--tui" data-libs--calendar--tui-groups-value="<%= CalendarGroup.all.to_json %>" data-libs--calendar--tui-events-value="<%= CalendarEvent.all.to_json(only: [:id, :title, :end, :start], methods: [:calendarId]) %>"></div>

import Calendar from '@toast-ui/calendar';
import ApplicationController from '../../application_controller';

export default class Libs_Calendar_TuiController extends ApplicationController {
  static targets= ["calendar"]
  static values = {
    class: { type: String, default: "w-full h-[700px]" },
    groups: { type: Array, default: [] },
    events: { type: Array, default: [] }
  }

  init() {
    this.initHTML()
    this.calendar = new Calendar(this.calendarTarget, this.options());
    this.initCalendarAction()
    this.initValues()
    // this.setCalendars(this.groupsValue)
    // this.createEvents(this.eventsValue)
  }

  initHTML() {
    this.element.innerHTML = this.defaultHTML()
  }
  
  defaultHTML() {
    return `
      <select>
        <option data-action="click->${this.identifier}#changeView" selected value="month">Time View</option>
        <option data-action="click->${this.identifier}#changeView" value="month">Month</option>
        <option data-action="click->${this.identifier}#changeView" value="week">Week</option>
        <option data-action="click->${this.identifier}#changeView" value="day">Day</option>
      </select>
      <select data-action="change->${this.identifier}#showCalendarEvent">
        <option>Select Class</option>
        ${this.groupsValue.map((group) => {
          return `<option value="${group.id}">${group.name}</option>`
        }).join('')} }
      </select>
      <button data-action="click->${this.identifier}#prev">Prev</button>
      <button data-action="click->${this.identifier}#next">Next</button>

  
      <div class="${this.classValue}" data-${this.identifier}-target="calendar"></div>
    `
  }

  changeView(event) {
    this.calendar.changeView(event.target.value)
  }

  prev() {
    this.calendar.prev()
  }

  next() {
    this.calendar.next()
  }

  showCalendarEvent(event) {
    this.hideAllCalendars()
    const calendarId = event.target.value
    this.showCalendar(calendarId)
  }

  showCalendar(calendarId) {
    this.calendar.setCalendarVisibility(calendarId, true)
  }

  hideCalendar(calendarId) {
    this.calendar.setCalendarVisibility(calendarId, false)
  }

  initValues() {
    if (this.groupsValue.length < 1) { this.groupsValue = this.defaultGroups()}
    if (this.eventsValue.length < 1) { this.eventsValue = this.defaultEvents()}
  }
  groupsValueChanged(value, previousValue) {
    // if (previousValue.length === 0) { return }

    this.setCalendars(value)
    if (this.isDefined(this.groupsValueCallback)) { this.groupsValueCallback(value, previousValue) }
  }

  eventsValueChanged(value, previousValue) {
    // if (previousValue.length === 0) { return }

    this.calendar.clear()
    this.createEvents(value)
    if (this.isDefined(this.eventsValueCallback)) { this.eventsValueCallback(value, previousValue) }
  }

  setCalendars(groups) {
    this.calendar.setCalendars(groups)
  }

  hideAllCalendars() {
    this.groupsValue.forEach((group) => {
      this.hideCalendar(group.id)
    })
  }

  createEvents(events) {
    this.calendar.createEvents(events)
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

  // createEvents(eventsObject) {
  //   this.calendar.createEvents(eventsObject)
  // }

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
      // defaultView: 'month',
      defaultView: 'week',
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

  defaultGroups() {
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

  defaultEvents() {
    return [
      {
        id: 'event1',
        calendarId: 'cal1',
        title: 'Weekly meeting for group with id = cal1',
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

// Docs: https://github.com/nhn/tui.calendar/blob/main/docs/en/apis/calendar.md

// import Api from '../../javascript/controllers/api';
import Calendar from '@toast-ui/calendar';
import ApplicationComponentController from '../application_component_controller';

export default class extends ApplicationComponentController {
  static values = {
    ...super.values,
    calendarSchedules: { type: Array },
    calendarEvents: { type: Array }
  }

  initialize() {
    super.initialize()
    this.initializeValue()
    this.initializeCalendar()
    this.initializeAction()
    this.initializeClass()

    this.initializeComplete()
  }

  initializeValue() {
    let options = this.optionsValue
    if (options.calendarSchedules) {
      options.calendarSchedules = options.calendarSchedules.map((schedule) => {
        return Object.keys(schedule).reduce((result, key) => {
          if (key === 'id') {
            return {
              ...result,
              [key]: schedule[key]
            }
          }
          return {
            ...result,
            [this.toCamelCase(key)]: schedule[key]
          }
        }, {})
      })
    }
    if (options.calendarEvents) {
      options.calendarEvents = options.calendarEvents.map((event) => {
        const newEvent = Object.keys(event).reduce((result, key) => {
          if (key === 'id') {
            return {
              ...result,
              [key]: event[key]
            }
          }
          return {
            ...result,
            [this.toCamelCase(key)]: event[key]
          }
        }, {})
        return this.changeObjectKey(newEvent, 'calendarScheduleId', 'calendarId')
      })

    }
    this.optionsValue = options
    this.calendarEventsValue = this.calendarEvents
  }
  
  initializeCalendar() {
    this.calendar = new Calendar(this.element, this.overideOptions || { ...this.defaultOptions, ...this.options });
    // this.calendar = new Calendar(this.element, this.options);
    // this.calendar.setCalendars(this.calendars)
  }

  initializeAction() {
    this.calendar.on('selectDateTime', (event) => {
      console.log('selectDateTime', event)
      this.selectDateTime(event)
    });
    this.calendar.on('beforeCreateEvent', (event) => {
      console.log('beforeCreateEvent', event)
      this.beforeCreateEvent(event)
    });
    this.calendar.on('beforeUpdateEvent', (event) => {
      console.log('beforeUpdateEvent', event)
      this.beforeUpdateEvent(event)
    });
    this.calendar.on('beforeDeleteEvent', (event) => {
      console.log('beforeDeleteEvent', event)
      this.beforeDeleteEvent(event)
    });
    this.calendar.on('afterRenderEvent', (event) => {
      console.log('afterRenderEvent', event)
      this.afterRenderEvent(event)
    });
    this.calendar.on('clickDayName', (event) => {
      console.log('clickDayName', event)
      this.clickDayName(event)
    });
    this.calendar.on('clickEvent', (event) => {
      console.log('clickEvent', event)
      this.clickEvent(event)
    });
    this.calendar.on('clickMoreEventsBtn', (event) => {
      console.log('clickMoreEventsBtn', event)
      this.clickMoreEventsBtn(event)
    });
    this.calendar.on('clickTimezoneCollapseBtn', (event) => {
      console.log('clickTimezoneCollapseBtn', event)
      this.clickTimezoneCollapseBtn(event)
    });
  }

  initializeClass() {
    this.element.className = this.twMerge(this.element.className)
  }

  selectDateTime(event) {}

  beforeCreateEvent(event) {
    event = { ...event, isVisible: true }
    const response = this.Api.calendar_events.post({params: this.snakeCaseForObjectKey(this.convertToUTC(event))})
    response.then((response) => {
      console.log(response)
      this.createEvents([event])
    }).catch(function (error) {
      console.log(error);
    })
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

  calendarEventsValueChanged(value, previousValue) {
    this.clear()
    this.calendar.createEvents(this.calendarEventsValue)
  }

  convertToUTC(event) {
    event.start = event.start.d.d
    event.end = event.end.d.d
    return event
  }

  get calendarEvents() {
    return this.optionsValue.calendarEvents || [
    // return [
      {
        id: 'event1',
        calendarId: 'cal2',
        title: 'Weekly meeting',
        start: new Date().toISOString(),
        end: new Date().toISOString(),
      }
    ]
  }
  get overideOptions() {
    return this.optionsValue.overideOptions
  }
  get options() {
    return this.optionsValue.options || this.defaultOptions
  }
  get defaultOptions() {
    return {
      defaultView: 'month',
      useFormPopup: true,
      useDetailPopup: true,
      isReadOnly: false,
      usageStatistics: false,
      week: this.DEFAULT_WEEK_OPTIONS,
      month: this.DEFAULT_MONTH_OPTIONS,
      gridSelection: true,
      timezone: { zones: [] },
      theme: this.DEFAULT_THEME_OPTIONS,
      calendars: this.calendarSchedules,
    }
  }
  get DEFAULT_WEEK_OPTIONS() {
    return {
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
    }
  }
  get DEFAULT_MONTH_OPTIONS() {
    return {
      dayNames: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
      visibleWeeksCount: 0,
      workweek: false,
      narrowWeekend: false,
      startDayOfWeek: 1, // 1=monday, 0=sunday
      isAlways6Weeks: true,
      visibleEventCount: 6,
    }
  }
  get DEFAULT_THEME_OPTIONS() {
    return {
      common: {
        dayName: {
          color: '#515ce6',
        },
        saturday: {
          color: 'rgba(255, 64, 64)',
        },
      },
    }
  }
  get calendarSchedules() {
    return this.optionsValue.calendarSchedules || [
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
}


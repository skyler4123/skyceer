// Docs: https://github.com/nhn/tui.calendar/blob/main/docs/en/apis/calendar.md

import { Camelize } from '../helpers';
import Calendar from '@toast-ui/calendar';
import { twMerge } from 'tailwind-merge'
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    options: { type: Object },
    isOpen: { type: Boolean },
    isFocus: { type: Boolean },
    isActive: { type: Boolean },
    events: { type: Array }
  }

  initialize() {
    this.optionsValue = Camelize(this.optionsValue)
    this.initializeID()
    this.initializeValue()
    this.initializeCalendar()
    this.initializeAction()
    this.initializeClass()

    this.initializeComplete()
  }
  connect() {
    console.log(this)
    if (this.isTest) { console.log(this) }
  }
  initializeID() {
    if (!this.element.id) {
      this.element.id = `${this.identifier}-${crypto.randomUUID()}`
    }
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  initializeValue() {
    this.eventsValue = this.calendarEvents
  }
  
  initializeCalendar() {
    this.calendar = new Calendar(this.element, this.calendarOptions);
    this.calendar.setTheme({
      common: {
        gridSelection: {
          backgroundColor: 'rgba(81, 230, 92, 0.05)',
          border: '1px dotted #515ce6',
        },
      },
    });
  }

  initializeAction() {
    this.calendar.on('selectDateTime', (event) => {
      console.log(event)
    });
  }

  initializeClass() {
    this.element.className = twMerge(this.element.className)
  }

  getEvent(eventId, calendarId,) {
    return this.calendar.getEvent(eventId, calendarId)
  }

  createEvents(eventsObject) {
    this.calendar.createEvents(eventsObject)
  }

  updateEvent(eventId, calendarId, changes) {
    calendar.updateEvent(eventId, calendarId, changes)
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

  eventsValueChanged(value, previousValue) {
    this.clear()
    this.calendar.createEvents(this.eventsValue)
  }

  get klass() {
    return this.optionsValue.klass
  }
  get id() {
    return this.element.id
  }
  get isTest() {
    return this.optionsValue.isTest
  }
  get event() {
    return this.optionsValue.event
  }
  get eventId() {
    return this.event?.id || this.optionsValue.eventId || this.parentButtonEventId
  }
  get parentButtonController() {
    if (this.element.parentNode.closest('[data-controller]').dataset.controller.includes('button-component')) {
      return this.element.parentNode.closest('[data-controller*="button-component"]')
    } else {
      return false
    }
  }
  get parentButtonEventId() {
    if (this.parentButtonController) {
      return JSON.parse(this.parentButtonController.dataset.buttonComponentOptionsValue).events[0].id
    }
  }
  get events() {
    return this.optionsValue.events || [
      {
        id: 'event1',
        calendarId: 'cal2',
        title: 'Weekly meeting',
        start: '2024-01-07T09:00:00',
        end: '2024-01-07T10:00:00',
      },
      {
        id: 'event2',
        calendarId: 'cal1',
        title: 'Lunch appointment',
        start: '2024-01-08T12:00:00',
        end: '2024-01-08T13:00:00',
      },
      {
        id: 'event3',
        calendarId: 'cal2',
        title: 'Vacation',
        start: '2024-01-08',
        end: '2024-01-10',
        isAllday: true,
        category: 'allday',
      },
    ]
  }
  get calendarEvents() {
    return this.optionsValue.calendarEvents || this.events
  }
  get options() {
    return this.optionsValue.ptions || {
      usageStatistics: false,
      useFormPopup: true,
      useDetailPopup: true,
      useCreationPopup: true,
      defaultView: 'month',
      timezone: {
        zones: [
          {
            timezoneName: 'Asia/Seoul',
            displayLabel: 'Seoul',
          },
          {
            timezoneName: 'Europe/London',
            displayLabel: 'London',
          },
        ],
      },
      calendars: [
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
      ],
    }
  }
  get calendarOptions() {
    return this.optionsValue.calendarOptions || this.options
  }



}

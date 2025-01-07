//  How to use:
//  <div data-controller="libs--calendar--tui" data-libs--calendar--tui-groups-value="<%= CalendarGroup.all.to_json %>" data-libs--calendar--tui-events-value="<%= CalendarEvent.all.to_json(only: [:id, :title, :end, :start], methods: [:calendarId]) %>"></div>

import Calendar from '@toast-ui/calendar';
import Swal from 'sweetalert2'
import ApplicationController from '../../application_controller';
import { CalendarEventsApi } from '../../calendar/api/calendar_events_api';

export default class Libs_Calendar_TuiController extends ApplicationController {
  static targets= ["calendar", "selectClass"]
  static values = {
    class: { type: String, default: "w-full h-[700px]" },
    // schools: { type: Array, default: [] },
    // classes: { type: Array, default: [] },
    groups: { type: Array, default: [] },
    events: { type: Object, default: {} }
  }

  init() {
    this.initHTML()
    this.calendar = new Calendar(this.calendarTarget, this.options());
    this.initCalendarAction()
    // this.initValues()
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
      <select 
        data-action="change->${this.identifier}#showCalendarOfClass"
        data-${this.identifier}-target="selectClass"
      >
        <option>Select Class</option>
        ${this.groupsValue.map((klass) => {
          return `<option value="${klass.id}">${klass.name}</option>`
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

  async showCalendarOfClass(event) {
    const group = this.newCalendarGroup(event.target.value)
    this.calendar.setCalendars([group])
    let events = await this.fetchCalendarEventsFromGroupId(event.target.value)
    events = events.map((event) => {
      return {
        ...event,
        calendarId: this.selectClassTarget.value,
      }
    })
    console.log(events)
    this.calendar.clear()
    this.calendar.createEvents(events)
  }

  async fetchCalendarEventsFromGroupId(groupId) {
    const response = await CalendarEventsApi.calendar_group_id({ params: { calendar_group_id: groupId }})
    const responseData = response.data
    return responseData
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
  // groupsValueChanged(value, previousValue) {
  //   // if (previousValue.length === 0) { return }

  //   this.setCalendars(value)
  //   if (this.isDefined(this.groupsValueCallback)) { this.groupsValueCallback(value, previousValue) }
  // }

  // eventsValueChanged(value, previousValue) {
  //   // if (previousValue.length === 0) { return }

  //   this.calendar.clear()
  //   this.createEvents(value)
  //   if (this.isDefined(this.eventsValueCallback)) { this.eventsValueCallback(value, previousValue) }
  // }

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

  selectDateTime(event) {
    console.log(event)
    // Swal.fire({
    //   html: `
    //     <form class="max-w-sm mx-auto">
    //       <div class="mb-5">
    //         <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    //         <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
    //       </div>
    //       <div class="mb-5">
    //         <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    //         <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    //       </div>
    //       <div class="flex items-start mb-5">
    //         <div class="flex items-center h-5">
    //           <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    //         </div>
    //         <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
    //       </div>
    //       <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    //     </form>
    
    //   `,
    //   confirmButtonText: "Save"
    // });
  }

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

  clickEvent(event) {
    console.log(event)
  }

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

  // changeViewToMonth() {
  //   this.calendar.changeView('month')
  // }

  // changeViewToWeek() {
  //   this.calendar.changeView('week')
  // }

  // changeViewToDay() {
  //   this.calendar.changeView('day')
  // }

  // convertToUTC(event) {
  //   event.start = event.start.d.d
  //   event.end = event.end.d.d
  //   return event
  // }

  // normalizeForBackend(event) {
  //   event = { ...event, isVisible: true, lib: 'tui' }
  //   event = this.convertToUTC(event)
  //   event = this.changeObjectKey(event, 'calendarId', 'calendarScheduleId')
  //   event = this.snakeCaseForObjectKey(event)
  //   return event
  // }

  // normalizeFromBackend(event) {}

  options() {
    return {
      ...this.optionsParamsDefault(),
      ...this.optionsParams
    }
  }

  optionsParamsDefault() {
    return {
      defaultView: 'month',
      // defaultView: 'week',
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

  newCalendarGroup(group) {
    return {
      id: group,
      name: "name",
      // color: "#ec4899",
      // borderColor: "#1d4ed8",
      backgroundColor: this.stringToColour(group),
      // dragBackgroundColor: "#4338ca",
    }
  }

  stringToColour(str) {
    let hash = 0;
    str.split('').forEach(char => {
      hash = char.charCodeAt(0) + ((hash << 5) - hash)
    })
    let colour = '#'
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff
      colour += value.toString(16).padStart(2, '0')
    }
    return colour
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

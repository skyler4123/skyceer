//  How to use:
//  <div data-controller="libs--calendar--tui" data-libs--calendar--tui-groups-value="<%= CalendarGroup.all.to_json %>" data-libs--calendar--tui-events-value="<%= CalendarEvent.all.to_json(only: [:id, :title, :end, :start], methods: [:calendarId]) %>"></div>

import Calendar from '@toast-ui/calendar';
import Swal from 'sweetalert2'
import ApplicationController from '../../application_controller';
import { CalendarEventsApi } from '../../calendar/api/calendar_events_api';

export default class Education_Calendar_TuiController extends ApplicationController {
  static targets= ["calendar", "selectClass"]
  static values = {
    class: { type: String, default: "w-full h-[700px]" },
    groups: { type: Array, default: [] },
    events: { type: Object, default: {} }
  }

  init() {
    this.initHTML()
    this.initCalendar()
    this.initCalendarAction()
  }

  initHTML() {
    this.element.innerHTML = this.defaultHTML()
  }
  
  initCalendar() {
    this.calendar = new Calendar(this.calendarTarget, this.options());
    const groups = this.newCalendarGroups()
    this.calendar.setCalendars(groups)
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
    this.calendar.clear()

    // const group = this.newCalendarGroup(event.target.value, event.target.selectedOptions[0].text)
    // this.calendar.setCalendars([group])
    let events = await this.fetchCalendarEventsFromGroupId(event.target.value)
    events = events.map((event) => {
      return {
        id: event.id,
        title: event.title,
        start: event.start,
        end: event.end,
        calendarId: this.selectClassTarget.value,
      }
    })
    const starts = events.map((event) => event.start)
    const minStart = this.minTime(starts)
    const maxStart = this.maxTime(starts)

    const minLocalTime = this.getLocalHourFromTimeString(minStart)
    const maxLocalTime = this.getLocalHourFromTimeString(maxStart)
    // set hourStart for week view
    this.calendar.setOptions({
      week: {
        hourStart: minLocalTime - 1,
        hourEnd: maxLocalTime + 5,
      }
    })
    this.calendar.createEvents(events)
  }

  async fetchCalendarEventsFromGroupId(groupId) {
    const response = await CalendarEventsApi.index({ params: { eventable_id: groupId }})
    const responseData = response.data
    return responseData
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
    //       <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
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
        showTimezoneCollapseButton: true,
        timezonesCollapsed: false,
        hourStart: 15,
        hourEnd: 24,
        eventView: ['time'],
        taskView: false,
        collapseDuplicateEvents: false,
      },
      month: {
        startDayOfWeek: 1, // 1=monday, 0=sunday
        daynames: [],
        workweek: false,
        showTimezoneCollapseButton: true,
        timezonesCollapsed: false,
        hourStart: 0,
        hourEnd: 24,
        narrowWeekend: false,
        eventView: true,
        taskView: true,
        collapseDuplicateEvents: true,
      },
      gridSelection: true,
      timezone: {
        zones: [
          // {
          //   timezoneName: 'Asia/Ho_Chi_Minh',
          //   displayLabel: 'Vietnam',
          //   tooltip: 'Vietnam Time'
          // },
          // {
          //   timezoneName: 'Asia/Seoul',
          //   displayLabel: 'Seoul',
          //   tooltip: 'Seoul Time',
          // },
          // {
          //   timezoneName: 'Asia/Tokyo',
          //   displayLabel: 'Tokyo',
          //   tooltip: 'Tokyo Time',
          // },
        ],
      },
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

  newCalendarGroups() {
    return this.groupsValue.map((group) => {
      return {
        id: group.id,
        name: group.name,
        color: `#FFFFFF`,
        backgroundColor: "#111827",
        borderColor: "#111827",
      }
    })
  }

}

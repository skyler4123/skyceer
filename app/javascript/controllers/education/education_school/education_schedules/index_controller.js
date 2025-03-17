import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";
import Calendar from '@toast-ui/calendar';
import { createForm, openModal, openDrawer } from "controllers/education/helpers/data_helpers";

export default class Education_EducationSchool_EducationSchedules_IndexController extends Education_EducationSchool_LayoutController {
static targets= ["calendar", "selectClass"]
  static values = {
    groups: { type: Array, default: [] },
    events: { type: Object, default: {} }
  }

  initBindings() {
  }

  init() {
    this.initCalendar()
    this.initCalendarAction()
    this.initCalendarEvents()
  }

  initCalendar() {
    this.calendar = new Calendar(this.calendarTarget, this.options());
    const groups = this.newCalendarGroups()
    this.calendar.setCalendars(groups)
  }

  contentHTML() {
    return `
      <div class="flex flex-col w-4/5 mx-auto mt-10 gap-y-4">

        <form action="/education_schedules" class="flex flex-row justify-end items-center gap-x-4">
          <div>
            <select 
              data-${this.identifier}-target="selectClass"
              name="education_class_id"
              class="h-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 rounded-md"
            >
              <option>Select Class</option>
              ${this.educationClassesForSelect().map((klass) => {
                return `<option value="${klass.id}">${klass.name}</option>`
              }).join('')} }
            </select>
          </div>
          <div class="flex justify-center items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer">
            <input type="submit" value="Search">
          </div>        
        </form>
        
        <div class="flex flex-row justify-between items-center gap-x-4">
          <div class="flex flex-row gap-x-2">
            <button
              class="flex justify-center items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer"
              data-action="click->${this.identifier}#day"
            >
              Day
            </button>
            <button
              class="flex justify-center items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer"
              data-action="click->${this.identifier}#week"
            >
              Week
            </button>
            <button
              class="flex justify-center items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer"
              data-action="click->${this.identifier}#month"
            >
              Month
            </button>
          </div>

          <div class="flex flex-row gap-x-2">
            <button
              class="flex justify-center items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer"
              data-action="click->${this.identifier}#prev"
            >
              Prev
            </button>
            <button
              class="flex justify-center items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer"
              data-action="click->${this.identifier}#next"
            >
              Next
            </button>
          </div>
        </div>

        <div
          class="w-full h-[700px] bg-white border border-gray-300 rounded-lg" 
          data-${this.identifier}-target="calendar"
        >
        </div>

      </div>
    `
  }

  initCalendarEvents() {
    this.calendar.clear()
    let events = this.calendarEvents()?.map((event) => {
      return {
        id: event.id,
        title: event.title,
        start: event.start,
        end: event.end,
        calendarId: event.eventable_id,
      }
    })

    this.calendar.createEvents(events)
  }

  calendarEvents() {
    return ServerData.data.calendar_events
  }

  educationClassesForSelect() {
    return ServerData.data.education_classes
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

  day() {
    this.calendar.changeView('day')
  }

  week() {
    this.calendar.changeView('week')
  }

  month() {
    this.calendar.changeView('month')
  }
  // async fetchCalendarEventsFromGroupId(groupId) {
  //   const response = await CalendarEventsApi.index({ params: { eventable_id: groupId }})
  //   const responseData = response.data
  //   return responseData
  // }

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
    openModal({
      html: this.createEventHTML(), 
    })
    // openDrawer({
    //   html: this.createEventHTML(), 
    // })
  }

  createEventHTML() {
    return createForm({
      html: `
        <div class="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
          </div>
          <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
          </div>


          <div class="relative max-w-sm">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
            </div>
            <input datepicker id="default-datepicker" type="datetime-local" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
          </div>


          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
      `
    })
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
      defaultView: 'month',
      // defaultView: 'week',
      useFormPopup: false,
      useDetailPopup: false,
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
    return this.educationClassesForSelect().map((group) => {
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
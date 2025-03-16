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
    // openModal({
    //   html: this.createEventHTML(), 
    // })
    openDrawer({
      html: this.createEventHTML(), 
    })
  }

  createEventHTML() {
    return createForm({
      html: `
        <div class="mb-4">
          <label for="library" class="block text-sm font-medium text-gray-700">Library</label>
          <input type="text" id="library" name="library" class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
          <input type="text" id="title" name="title" class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="body" class="block text-sm font-medium text-gray-700">Body</label>
          <textarea id="body" name="body" class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
        </div>
        <div class="mb-4">
          <label for="isAllday" class="block text-sm font-medium text-gray-700">All Day</label>
          <input type="checkbox" id="isAllday" name="isAllday" class="mt-1 block shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="start" class="block text-sm font-medium text-gray-700">Start</label>
          <input type="datetime-local" id="start" name="start" class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="end" class="block text-sm font-medium text-gray-700">End</label>
          <input type="datetime-local" id="end" name="end" class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="goingDuration" class="block text-sm font-medium text-gray-700">Going Duration</label>
          <input type="text" id="goingDuration" name="goingDuration" class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="comingDuration" class="block text-sm font-medium text-gray-700">Coming Duration</label>
          <input type="text" id="comingDuration" name="comingDuration" class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
          <input type="text" id="location" name="location" class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="attendees" class="block text-sm font-medium text-gray-700">Attendees</label>
          <input type="text" id="attendees" name="attendees" class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
          <input type="text" id="category" name="category" class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="dueDateClass" class="block text-sm font-medium text-gray-700">Due Date Class</label>
          <input type="text" id="dueDateClass" name="dueDateClass" class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="recurrenceRule" class="block text-sm font-medium text-gray-700">Recurrence Rule</label>
          <input type="text" id="recurrenceRule" name="recurrenceRule" class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="state" class="block text-sm font-medium text-gray-700">State</label>
          <input type="text" id="state" name="state" class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="isVisible" class="block text-sm font-medium text-gray-700">Visible</label>
          <input type="checkbox" id="isVisible" name="isVisible" class="mt-1 block shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="isPending" class="block text-sm font-medium text-gray-700">Pending</label>
          <input type="checkbox" id="isPending" name="isPending" class="mt-1 block shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="isFocused" class="block text-sm font-medium text-gray-700">Focused</label>
          <input type="checkbox" id="isFocused" name="isFocused" class="mt-1 block shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="isReadOnly" class="block text-sm font-medium text-gray-700">Read Only</label>
          <input type="checkbox" id="isReadOnly" name="isReadOnly" class="mt-1 block shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="isPrivate" class="block text-sm font-medium text-gray-700">Private</label>
          <input type="checkbox" id="isPrivate" name="isPrivate" class="mt-1 block shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="color" class="block text-sm font-medium text-gray-700">Color</label>
          <input type="color" id="color" name="color" class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="backgroundColor" class="block text-sm font-medium text-gray-700">Background Color</label>
          <input type="color" id="backgroundColor" name="backgroundColor" class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="dragBackgroundColor" class="block text-sm font-medium text-gray-700">Drag Background Color</label>
          <input type="color" id="dragBackgroundColor" name="dragBackgroundColor" class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="borderColor" class="block text-sm font-medium text-gray-700">Border Color</label>
          <input type="color" id="borderColor" name="borderColor" class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
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
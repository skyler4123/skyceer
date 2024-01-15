import Calendar from '@toast-ui/calendar';
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  initialize() {
    const options = {
      usageStatistics: false,
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
    };
    
    const calendar = new Calendar(this.element, options);
    calendar.createEvents([
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
    ]);

    calendar.setOptions({
      useFormPopup: true,
      useDetailPopup: true,
    });

    calendar.setTheme({
      common: {
        gridSelection: {
          backgroundColor: 'rgba(81, 230, 92, 0.05)',
          border: '1px dotted #515ce6',
        },
      },
    });
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}

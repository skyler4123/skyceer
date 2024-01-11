import Calendar from '@toast-ui/calendar';
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  initialize() {
    const calendar = new Calendar(this.element, {
      defaultView: 'week',
      template: {
        time(event) {
          const { start, end, title } = event;
    
          return `<span style="color: white;">${formatTime(start)}~${formatTime(end)} ${title}</span>`;
        },
        allday(event) {
          return `<span style="color: gray;">${event.title}</span>`;
        },
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
    });
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}

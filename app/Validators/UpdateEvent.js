'use strict';

class UpdateEvent {
  get rules() {
    return {
      startDate: `date|after:${new Date()}`,
      endDate: 'date',
    };
  }

  get messages() {
    return {
      'startDate.date':
        'Start Date of event should be a valid date e.g (MM-DD-YYYY).',
      'startDate.after': 'Event startDate must be after current day',
      'endDate.date': 'End Date of event should be a valid date (MM-DD-YYYY).',
    };
  }
}

module.exports = UpdateEvent;

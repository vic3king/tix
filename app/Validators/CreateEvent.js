'use strict';

const Validator = use('./Validator');

class CreateEvent extends Validator {
  get rules() {
    return {
      title: 'required|unique:events,title',
      eventDetails: 'required',
      location: 'required',
      startTime: 'required',
      endTime: `required`,
      startDate: `required|date|after_offset_of:1,seconds`,
      endDate: 'required|date',
    };
  }

  get messages() {
    return {
      'title.required': 'Title of event is required',
      'title.unique': 'Title of event is already being used.',
      'eventDetails.required': 'Event details is required',
      'location.required': 'Location of event is required.',
      'startTime.required': 'startTime of event is required',
      'endTime.required': 'endTime of event is required',
      'startDate.required': 'startDate of event is required',
      'startDate.date':
        'Start Date of event should be a valid date e.g (MM-DD-YYYY).',
      'startDate.after': 'Event startDate must be after current day',
      'endDate.required': 'endDate of event is required',
      'endDate.date': 'End Date of event should be a valid date (MM-DD-YYYY).',
    };
  }
}

module.exports = CreateEvent;

'use strict';

/*
|--------------------------------------------------------------------------
| EventSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Event = use('App/Models/Event');

class EventSeeder {
  async run() {
    await Event.createMany([
      {
        userId: '65e7e858-2e71-45ef-8076-233a1cc31166',
        title: 'Test',
        eventDetails: 'details of event here',
        location: 'Location of event',
        startTime: '10-05-1992',
        endTime: '10-05-1992',
        endDate: '10-05-1992',
        startDate: '10-05-1992',
        status: 'draft',
        socialHandle: 'github.com/vic3king',
        website: 'www.vic3king.com',
        avatar: 'https://loremflickr.com/320/240',
      },
    ]);
  }
}

module.exports = EventSeeder;

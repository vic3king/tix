'use strict';

/*
|--------------------------------------------------------------------------
| TicketSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Ticket = use('App/Models/Ticket');

class TicketSeeder {
  async run() {
    await Ticket.createMany([
      {
        eventId: '19c8c94e-0fc1-4619-9f7b-d985b41e84f1',
        name: 'VIP',
        ticketDetails: 'VIP ticket for our exclusive tix event',
        benefits: 'Access to global talent etc...',
        inventoryNumber: 10,
        type: 'paid',
        amount: 100,
        avatar: 'https://loremflickr.com/320/240',
      },
    ]);
  }
}

module.exports = TicketSeeder;

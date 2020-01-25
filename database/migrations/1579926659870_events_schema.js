'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class EventsSchema extends Schema {
  up() {
    this.create('events', table => {
      table
        .uuid('id')
        .primary()
        .unique();
      table
        .uuid('userId')
        .notNullable()
        .references('id')
        .inTable('users');
      table.string('title', 254);
      table
        .string('eventDetails', 254)
        .notNullable()
        .unique();
      table.string('location', 254).notNullable();
      table.date('startTime').notNullable();
      table.date('endTime').notNullable();
      table.date('startDate').notNullable();
      table.date('endDate').notNullable();
      table.enum('status', ['draft', 'active', 'inactive']);
      table.string('socialHandle');
      table.string('website');
      table.string('avatar');
      table.timestamps();
    });
  }

  down() {
    this.drop('events');
  }
}

module.exports = EventsSchema;

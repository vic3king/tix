'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TicketsSchema extends Schema {
  up() {
    this.create('tickets', table => {
      // alter table
      table
        .uuid('id')
        .primary()
        .unique();
      table
        .uuid('eventId')
        .notNullable()
        .references('id')
        .inTable('events');
      table
        .string('name', 80)
        .notNullable()
        .unique();
      table.string('ticketDetails', 254).notNullable();
      table.string('benefits', 254);
      table.integer('inventoryNumber').notNullable();
      table.enum('type', ['free', 'paid']).notNullable();
      table.integer('amount').notNullable();
      table.string('avatar');
      table.timestamps();
    });
  }

  down() {
    this.drop('tickets');
  }
}

module.exports = TicketsSchema;

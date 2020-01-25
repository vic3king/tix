'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
  up() {
    this.create('users', table => {
      table
        .uuid('id')
        .primary()
        .unique();
      table.string('firstName', 80).notNullable();
      table.string('lastName', 80).notNullable();
      table
        .string('email', 254)
        .notNullable()
        .unique();
      table.string('password', 60).notNullable();
      table.string('avatar');
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UserSchema;

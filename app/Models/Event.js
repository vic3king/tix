'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
const uuid = use('uuid');

class Event extends Model {
  static boot() {
    super.boot();

    this.addHook('beforeSave', async event => {
      if (!event.id) {
        event.id = uuid.v4();
        event.status = 'draft';
      }
    });
  }

  static get incrementing() {
    return false;
  }

  user() {
    return this.belongsTo('App/Models/User', 'userId', 'id');
  }

  tickets() {
    return this.hasMany('App/Models/Ticket', 'id', 'ticketId');
  }
}

module.exports = Event;

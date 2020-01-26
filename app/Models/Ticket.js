'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
const uuid = use('uuid');

class Ticket extends Model {
  static boot() {
    super.boot();

    this.addHook('beforeSave', async ticket => {
      if (!ticket.id) {
        ticket.id = uuid.v4();
      }
    });
  }

  static get incrementing() {
    return false;
  }

  event() {
    return this.belongsTo('App/Models/Event', 'ticketId', 'id');
  }
}

module.exports = Ticket;

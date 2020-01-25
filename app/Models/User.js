'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

const Hash = use('Hash');
const uuid = use('uuid');

class User extends Model {
  static boot() {
    super.boot();

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async user => {
      if (user.dirty.password) {
        user.password = await Hash.make(user.password);
      }

      if (!user.id) {
        user.id = uuid.v4();
      }
    });
  }

  static get hidden() {
    return ['password', 'resetTokenExpiry', 'resetToken'];
  }

  events() {
    return this.hasMany('App/Models/Event', 'id', 'userId');
  }
}

module.exports = User;

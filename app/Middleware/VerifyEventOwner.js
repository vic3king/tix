'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Event = use('App/Models/Event');

class VerifyEventOwner {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, params, auth, response }, next) {
    // call next to advance the request
    const event = await Event.findBy('id', params.eventId);

    if (event.userId !== auth.user.id) {
      return response.status(400).json({
        status: 'error',
        message:
          'You cannot create tickets for an event belonging to another user.',
      });
    }
    return next();
  }
}

module.exports = VerifyEventOwner;

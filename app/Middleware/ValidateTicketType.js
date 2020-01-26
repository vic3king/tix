'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class ValidateTicketType {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, response }, next) {
    // call next to advance the request
    const { type } = request.all();

    if (type && type === 'free' && type > 0) {
      return response.status(400).json({
        status: 'error',
        message: 'Free tickets should have 0 as ticket amount',
      });
    }
    return next();
  }
}

module.exports = ValidateTicketType;

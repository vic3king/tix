'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class BodyTrimmer {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */

  async handle({ request }, next) {
    const { body } = request;
    Object.keys(body).forEach(val => {
      if (typeof body[val] === 'string') {
        body[val] = body[val].trim();
      }
    });

    request.body = body;
    await next();
  }
}

module.exports = BodyTrimmer;

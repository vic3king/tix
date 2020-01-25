'use strict';

class Validator {
  async fails(errorMessages) {
    /* *
     * format error messages into an object with fields as keys and values as
     * error messages
     * { field: 'error message'}
     */
    const errors = errorMessages.reduce((messages, errorMessage) => {
      const { field } = errorMessage;

      return {
        ...messages,
        [field]: errorMessage.message,
      };
    }, {});

    return this.ctx.response.status(400).json({
      status: 'error',
      message: 'Bad request',
      errors,
    });
  }

  get validateAll() {
    return true;
  }
}

module.exports = Validator;

'use strict';

const Validator = use('./Validator');

class UserLogin extends Validator {
  get rules() {
    return {
      email: 'required|email',
      password: 'required',
    };
  }

  get messages() {
    return {
      'email.required': 'An email address is required.',
      'email.email': 'Email address is not valid.',
      'password.required': 'A password is required.',
    };
  }
}

module.exports = UserLogin;

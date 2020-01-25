'use strict';

const Validator = use('./Validator');

class UserRegistration extends Validator {
  get rules() {
    return {
      firstName: 'required',
      lastName: 'required',
      email: 'required|email|unique:users,email',
      password: 'required|min:6',
    };
  }

  get messages() {
    return {
      'firstName.required': 'First name is required',
      'lastName.required': 'Last name is required',
      'email.required': 'An email address is required.',
      'email.email': 'Email address is not valid.',
      'email.unique': 'This email is already registered.',
      'password.required': 'A password is required.',
      'password.min': 'Password should be at least 6 characters.',
    };
  }
}

module.exports = UserRegistration;

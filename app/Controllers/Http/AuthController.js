'use strict';

const User = use('App/Models/User');

class AuthController {
  async register({ auth, request }) {
    const { firstName, lastName, email, password } = request.all();

    const user = new User();

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email.toLowerCase();
    user.password = password;

    await user.save();

    const { token } = await auth.generate(user);

    return {
      status: 'success',
      message: 'Registration successful',
      data: {
        user,
        token,
      },
    };
  }

  async login({ auth, request }) {
    const { email, password } = request.all();

    const { token } = await auth.attempt(email, password);

    const user = await User.findBy('email', email);

    return {
      status: 'success',
      message: 'Login successful',
      data: {
        user,
        token,
      },
    };
  }
}

module.exports = AuthController;

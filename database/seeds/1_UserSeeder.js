'use strict';

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const User = use('App/Models/User');

class UserSeeder {
  async run() {
    await User.createMany([
      {
        id: '65e7e858-2e71-45ef-8076-233a1cc31166',
        firstName: 'Samuel',
        lastName: 'Page',
        email: 'sam@page.com',
        password: '12345678',
      },
      {
        id: '1d4e693a-be8e-43f8-b5a1-2d320f62a616',
        firstName: 'Peter',
        lastName: 'Pan',
        email: 'test@gmail.com',
        password: '12345678',
      },
    ]);
  }
}

module.exports = UserSeeder;

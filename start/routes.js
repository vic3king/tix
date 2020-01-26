'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.on('/').render('welcome');

Route.group(() => {
  Route.get('/', () => {
    return { message: 'Welcome to Tix assessment API (Version 1)' };
  });

  // Authentication
  Route.post('auth/register', 'AuthController.register').validator(
    'UserRegistration'
  );
  Route.post('auth/login', 'AuthController.login').validator('UserLogin');
}).prefix('v1');

// Events
Route.group(() => {
  Route.post('event', 'EventController.create')
    .validator('CreateEvent')
    .middleware('auth');
  Route.get('/', 'EventController.getAll').middleware('auth');
}).prefix('v1/events');

// Transactions
Route.group(() => {
  Route.post('/:eventId', 'TicketController.create')
    .validator('CreateTicket')
    .middleware(['auth', 'VerifyEventOwner', 'ValidateTicketType']);
}).prefix('v1/tickets');

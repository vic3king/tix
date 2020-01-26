# Tix

Is an api built for a ticketing application similar to tix.africa

This project is built on [AdonisJs](http://adonisjs.com/) AdonisJs is a Node.js web framework with a breath of fresh air and drizzle of elegant syntax on top of it. We prefer developer joy and stability over anything else..


## Setup

```bash
- git clone https://github.com/vic3king/tix.git
- cd tix && npn install
- create a .env file usiong details provided in the .env.example 
- after that run npm run db:refresh to run migrate and npm run seed 
- npm run start:dev to launch development server and access endpoints to e.g [localhost:3000/v1](http://127.0.0.1:3000)
```

Hosted api can be found [here](https://tix-tix.herokuapp.com/v1)


## API Endpoints
<table>
  <tr>
      <th>Request</th>
      <th>End Point</th>
      <th>Action</th>
  </tr>
    <tr>
      <td>POST</td>
      <td>/</td>
      <td>Welcome screen</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/v1/auth/login/</td>
    <td>Login a user</td>
  </tr>
   <tr>
    <td>POST</td>
    <td>/v1/auth/register/</td>
    <td>Register a user</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/v1/events/event/</td>
    <td>Create a new event</td>
  </tr>
   <tr>
    <td>GET</td>
    <td>/v1/events</td>
    <td>Get all events</td>
  </tr>
   <tr>
    <td>GET</td>
    <td>/v1/events/:eventId</td>
    <td>Get one event and associated tickets</td>
  </tr>
   <tr>
    <td>PATCH</td>
    <td>/v1/events/:eventId</td>
    <td>Update properties of an event</td>
  </tr>
   <tr>
    <td>DELETE</td>
    <td>/v1/events/:eventId</td>
    <td>Delete an event and associated tickets</td>
  </tr>
   <tr>
    <td>PATCH</td>
    <td>/v1/tickets/:eventId</td>
    <td>Create a ticket for an event</td>
  </tr>
</table>

## Entity Realtionship diagram

![enentity relationship diagram](https://github.com/vic3king/tix/blob/master/Screenshot%202020-01-26%20at%2006.06.44.png)

## Authors

* **Akaniru victory** - *Initial work* - [Vic3king](http://www.vic3king.io)

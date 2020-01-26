'use strict';

const Ticket = use('App/Models/Ticket');

class TicketController {
  async create({ request, params }) {
    const {
      name,
      ticketDetails,
      benefits,
      inventoryNumber,
      type,
      amount,
      avatar,
    } = request.all();

    const ticket = new Ticket();

    ticket.eventId = params.eventId;
    ticket.name = name;
    ticket.ticketDetails = ticketDetails;
    ticket.benefits = benefits;
    ticket.inventoryNumber = inventoryNumber;
    ticket.type = type;
    ticket.amount = amount;
    ticket.avatar = avatar;

    await ticket.save();

    return {
      status: 'success',
      message: 'Ticket created successfully',
      ticket,
    };
  }
}

module.exports = TicketController;

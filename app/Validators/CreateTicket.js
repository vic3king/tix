'use strict';

const Validator = use('./Validator');

class CreateTicket extends Validator {
  get rules() {
    return {
      name: 'required|unique:tickets,name',
      ticketDetails: 'required',
      inventoryNumber: 'required|number',
      type: 'required',
      amount: 'required|number',
    };
  }

  get messages() {
    return {
      'name.required': 'Name of this ticket is required',
      'name.unique': 'Ticket with this name is already registered.',
      'ticketDetails.required': 'ticketDetails for  this ticket is required',
      'inventoryNumber.required':
        'InventoryNumber amount for this ticket is required',
      'inventoryNumber.number': 'inventoryNumber has to be a number',
      'type.required': 'type of ticket is required, e.g(free, paid)',
      'amount.required':
        'amount for selling this ticket is required(enter 0 for free tickets)',
      'amount.number': 'amount for this ticket has to be a number',
    };
  }
}

module.exports = CreateTicket;

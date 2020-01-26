'use strict';

const Event = use('App/Models/Event');

class EventController {
  async create({ auth, request, response }) {
    const {
      title,
      eventDetails,
      location,
      startTime,
      endTime,
      startDate,
      endDate,
      socialHandle,
      website,
      avatar,
    } = request.all();

    const event = new Event();

    event.userId = auth.user.id;
    event.title = title;
    event.eventDetails = eventDetails;
    event.location = location;
    event.startTime = startTime;
    event.endTime = endTime;
    event.startDate = startDate;
    event.endDate = endDate;
    event.socialHandle = socialHandle;
    event.website = website;
    event.avatar = avatar;

    await event.save();

    return {
      status: 'success',
      message: 'Event created successfully',
      event,
    };
  }

  async getAll({ request, response }) {
    const { page = 1, per_page = 10 } = request.all();

    const events = await Event.query().paginate(page, per_page);
    const { rows, ...meta } = events;

    return response.status(200).json({
      status: 'success',
      data: {
        categories: rows,
        meta: {
          totalItems: meta.pages.total,
          itemsPerPage: meta.pages.perPage,
          currentPage: meta.pages.page,
          totalPages: meta.pages.lastPage,
        },
      },
    });
  }

  async update({ request, params, response }) {
    const userInput = request.only([
      'eventDetails',
      'location',
      'startTime',
      'endTime',
      'startDate',
      'endDate',
      'socialHandle',
      'website',
      'avatar',
    ]);

    const event = await Event.findOrFail(params.eventId);

    Object.keys(userInput).forEach(key => {
      event[key] = userInput[key];
    });

    await event.save();

    return response.status(200).json({
      status: 'success',
      message: 'Event details updated successfully',
      event,
    });
  }

  // const eventID = params.id // event's id to be deleted
  // const userID = auth.user.id // logged user's ID

  // // looking for the event
  // const event = await Event.query()
  //   .where({
  //     id: eventID,
  //     user_id: userID

  async delete({ request, params, response }) {
    const event = await Event.findBy({ id: params.eventId });

    if (!event) {
      return response.status(404).json({
        status: 'error',
        message: 'Event not found',
      });
    }

    console.log(event.tickets(), '>>>>>>>');
    await event.tickets().delete();
    await event.delete();

    return response.status(200).json({
      status: 'success',
      message: 'Event deleted successfully',
    });
  }
}

module.exports = EventController;

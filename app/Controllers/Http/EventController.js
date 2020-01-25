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
}

module.exports = EventController;

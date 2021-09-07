export const CREATE_EVENT = 'CREATE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';

export const createEvent = (payload, eventDate, orgaId) => ({
  type: CREATE_EVENT,
  payload,
  eventDate,
  orgaId,
});

export const deleteEvent = (eventId) => ({
  type: DELETE_EVENT,
  eventId,
});

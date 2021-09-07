import { connect } from 'react-redux';
import EventsComponent from 'src/components/EventsComponent';
import {
  createEvent,
  deleteEvent,
} from 'src/actions/events';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  createEvent: (data, eventDate, orgaId) => dispatch(createEvent(data, eventDate, orgaId)),
  deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsComponent);

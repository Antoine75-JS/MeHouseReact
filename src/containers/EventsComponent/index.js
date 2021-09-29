import { connect } from 'react-redux';
import EventsComponent from 'src/components/EventsComponent';
import {
  createEvent,
  deleteEvent,
} from 'src/actions/events';

import { openToast } from 'src/actions/toast';

const mapStateToProps = (state) => ({
  isToastOpen: state.toast.open,
  toastMessage: state.toast.message,
});

const mapDispatchToProps = (dispatch) => ({
  createEvent: (data, eventDate, orgaId) => dispatch(createEvent(data, eventDate, orgaId)),
  deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),

  setToastMessage: (message) => dispatch(openToast(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsComponent);

import React from 'react';

// Components
import ExpirationChip from 'src/components/ExpirationChip';

import {
  FiTrash,
} from 'react-icons/fi';

import './styles.scss';

const EventsComponent = () => {
  const isEmpty = true;

  return (
    <div className="eventsComponent">
      <div className="eventsComponent-title">Événements</div>
      <div className="eventsComponent-events">
        <div className="eventsComponent-events_event">
          <div className="eventsComponent-events_event--title">Concert</div>
          <div className="eventsComponent-events_event--date">01/01/2021</div>
          <ExpirationChip expireDate={"01/01/2021"} />
          <FiTrash className="eventsComponent-events_event--delete" color="#dc143c" size="25px" strokeWidth="2.5px" />
        </div>
      </div>
      <div className="eventsComponent-events">
        <div className="eventsComponent-events_event">
          <div className="eventsComponent-events_event--title">Concert</div>
          <div className="eventsComponent-events_event--date">01/01/2021</div>
          <ExpirationChip expireDate={"01/01/2021"} />
          <FiTrash className="eventsComponent-events_event--delete" color="#dc143c" size="25px" strokeWidth="2.5px" />
        </div>
      </div>
      <div className="eventsComponent-events">
        <div className="eventsComponent-events_event">
          <div className="eventsComponent-events_event--title">Concert</div>
          <div className="eventsComponent-events_event--date">01/01/2021</div>
          <ExpirationChip expireDate={"01/01/2021"} />
          <FiTrash className="eventsComponent-events_event--delete" color="#dc143c" size="25px" strokeWidth="2.5px" />
        </div>
      </div>
    </div>
  );
};

export default EventsComponent;

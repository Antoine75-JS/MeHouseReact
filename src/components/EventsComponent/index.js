import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

// Validation props
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Components
import ExpirationChip from 'src/components/ExpirationChip';
import AddButtonFilled from 'src/components/Utils/AddButtonFilled';

import {
  FiTrash,
} from 'react-icons/fi';

import './styles.scss';

// Yup validation schema
const eventSchema = yup.object().shape({
  // eslint-disable-next-line newline-per-chained-call
  eventName: yup.string().required().typeError("Le nom de l'événement doit contenir entre 3 et 30 caractères alphanumériques").min(3).max(30),
  // eventDate: yup.date().required().typeError("La date de l'événement doit être coorecte"),
});

const EventsComponent = () => {
  // React hook form
  const { control, register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(eventSchema),
  });

  // Local states
  const [eventDate, setEventDate] = useState(new Date());

  const handleEventDateChange = (date) => {
    setEventDate(date);
    console.log(date, eventDate);
  };

  const handleNewEventSubmit = (data) => {
    console.log(data, eventDate);
  };

  return (
    <div className="eventsComponent">
      <div className="eventsComponent-title">Évènements</div>
      <div className="eventsComponent-addEventForm">
        <form onSubmit={handleSubmit(handleNewEventSubmit)} className="eventsComponent-addEventForm-form">
          <input
            {...register('eventName')}
            control={control}
            name="eventName"
            rules={{ required: true }}
            type="text"
            className="eventsComponent-addEventForm-form_input"
            placeholder="Nom de l'évènement"
          />
          <DatePicker
            onChange={(date) => handleEventDateChange(date)}
            className="eventsComponent-addEventForm-form_date"
            showTimeSelect
            selected={eventDate}
          />
          <input type="submit" value="+" className="eventsComponent-addEventForm-form_btn" />
        </form>
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
      <div className="eventsComponent-events">
        <div className="eventsComponent-events_event">
          <div className="eventsComponent-events_event--title">Concert</div>
          <div className="eventsComponent-events_event--date">01/01/2021</div>
          <ExpirationChip expireDate={"01/01/2021"} />
          <FiTrash className="eventsComponent-events_event--delete" color="#dc143c" size="25px" strokeWidth="2.5px" />
        </div>
      </div>
    </div >
  );
};

export default EventsComponent;

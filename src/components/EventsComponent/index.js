/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// api
import api from 'src/api';

// Dayjs
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import 'dayjs/locale/fr';

// Validation props
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Components
import ExpirationChip from 'src/components/ExpirationChip';

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

// Config dayjs
dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.locale('fr');

const EventsComponent = ({ orgaId, orgEvents, createEvent, deleteEvent }) => {
  console.log(orgEvents);
  // React hook form
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(eventSchema),
  });

  // Local states
  const [eventDate, setEventDate] = useState(new Date());

  // Get today
  const today = dayjs();

  const handleEventDateChange = (date) => {
    setEventDate(date);
    console.log(date, eventDate);
  };

  const handleNewEventSubmit = (data) => {
    console.log(data, eventDate, orgaId);
    createEvent(data, eventDate, orgaId);
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
            closeOnScroll={true}
            wrapperClassName="datePicker"
            className="eventsComponent-addEventForm-form_date"
            showTimeSelect
            selected={eventDate}
          />
          <input type="submit" value="+" className="eventsComponent-addEventForm-form_btn" />
        </form>
      </div>
      {orgEvents?.map((event) => (
        <div key={event._id} className="eventsComponent-events">
          <div className="eventsComponent-events_event">
            <div className="eventsComponent-events_event--title">{event.eventName}</div>
            {/* If event is in < 24h, set today, else set event's date */}
            <div className="eventsComponent-events_event--date">{
              dayjs(event.eventDate).diff(today, 'hours') > 24 ? (
                dayjs(event.eventDate).format('DD/MM/YY')
              ) : (
                dayjs(event.eventDate).diff(today, 'hours') < 0 ? (
                  <p>Il y a</p>
                ) : (
                  <p>Aujourd'hui</p>
                )
              )
            }
            </div>
            <ExpirationChip expireDate={event.eventDate} />
            <FiTrash className="eventsComponent-events_event--delete" color="#dc143c" size="25px" strokeWidth="2.5px" onClick={() => deleteEvent(event._id)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsComponent;

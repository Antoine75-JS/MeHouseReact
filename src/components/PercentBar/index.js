import React from 'react';
// Import dayjs
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import 'dayjs/locale/fr';

import './styles.scss';

// Config dayjs
dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.locale('fr');

const PercentBar = ({ creationDate, expireDate }) => {
  const today = dayjs();
  const created = dayjs(creationDate);
  // const createdTest = dayjs(creationDate).subtract(3, 'days');
  const expire = dayjs(expireDate);
  const expiresIn = expire.diff(created, 'hours');
  const fromCreation = created.diff(today, 'hours');
  // console.log('expiresin:', expiresIn, 'created', fromCreation);

  console.log('percent value:', Math.round(((today - created) / (expire - created)) * 100), '%');
  const percent = Math.round(((today - created) / (expire - created)) * 100);

  return (
    <div className="percentBar">
      <div className="percentBar-percent" style={{ width: `${percent}%` }} />
      <div className="percentBar-background" />
    </div>
  );
};

export default PercentBar;

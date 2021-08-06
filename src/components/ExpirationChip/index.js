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

const ExpirationChip = ({ expireDate }) => {
  const today = dayjs();
  const expire = dayjs(expireDate);
  const expireDiff = expire.diff(today, 'hours');
  const expiresIn = expire.fromNow(true);

  return (
    <div className={expireDiff > 24 ? ('expirationChip') : ('expirationChip urgent')}>
      <h1>{expiresIn}</h1>
    </div>
  );
};

export default ExpirationChip;

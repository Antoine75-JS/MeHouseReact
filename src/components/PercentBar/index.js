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
  const expire = dayjs(expireDate);

  const percent = Math.round(((today - created) / (expire - created)) * 100);

  return (
    <>
      {
        (percent >= 0 && percent <= 100) ? (
          <div className="percentBar">
            <div className="percentBar-expired" style={{ width: `${99 - percent}%` }} />
            <div className="percentBar-background" />
          </div>
        ) : (
          <div className="expired"> Expiré depuis </div>
        )
      }

    </>
  );
};

export default PercentBar;

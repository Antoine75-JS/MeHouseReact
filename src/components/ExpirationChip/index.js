import React from 'react';

// Import dayjs
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/fr';

import './styles.scss';

// Config dayjs
dayjs.extend(relativeTime);
dayjs.locale('fr');

const ExpirationChip = ({ creationDate }) => {
  const formatedDate = dayjs(creationDate);
  const expiresIn = formatedDate.fromNow(true);

  return (
    <div className="expirationChip">
      <h1>{expiresIn}</h1>
    </div>
  );
};

export default ExpirationChip;

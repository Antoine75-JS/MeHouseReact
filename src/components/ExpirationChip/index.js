import React from 'react';
import PropTypes from 'prop-types';

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
    // eslint-disable-next-line no-nested-ternary
    <div className={expireDiff > 24 ? ('expirationChip') : (expireDiff <= 0 ? ('expirationChip expiredColor') : ('expirationChip urgent'))}>
      <h1>{expiresIn}</h1>
    </div>
  );
};

ExpirationChip.propTypes = {
  expireDate: PropTypes.string.isRequired,
};

export default ExpirationChip;

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

// Set percentage bar or display expired
const PercentBar = ({ creationDate, expireDate }) => {
  const today = dayjs();
  const created = dayjs(creationDate);
  const expire = dayjs(expireDate);

  const percent = Math.round(((today - created) / (expire - created)) * 100);

  // If not expired and > 0, display bar, else display expired since
  return (
    <>
      {
        (percent >= 0 && percent <= 100) ? (
          <div className="percentBar">
            <div className="percentBar-percent" style={{ width: `${100 - percent}%` }} />
            <div className="percentBar-background" />
          </div>
        ) : (
          <div className="expired"> Expiré depuis </div>
        )
      }
    </>
  );
};

PercentBar.propTypes = {
  creationDate: PropTypes.string,
  expireDate: PropTypes.string,
};

PercentBar.defaultProps = {
  creationDate: '',
  expireDate: '',
};

export default PercentBar;

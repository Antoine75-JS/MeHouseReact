import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './styles.scss';

const OrgaCard = ({ name, categories, id }) => {
  const [tasksCpt, setTasksCpt] = useState(null);

  // Set number of tasks
  useEffect(() => {
    let cpt = 0;
    categories.forEach((category) => {
      if (category.catTasks.length > 0) {
        cpt += category.catTasks.length;
      }
    });
    setTasksCpt(cpt);
  }, [categories]);

  return (
    <>
      <Link to={`/orgas/${id}`} className="organisationsCard">
        <h2 className="organisationsCard-title">
          {name}
        </h2>
        <h3 className="organisationsCard-nbCat">
          <span className="organisationsCard-nbCat--bold">{tasksCpt}</span> tâches enregistées
        </h3>
      </Link>
    </>
  );
};

OrgaCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  categories: PropTypes.array,
};
OrgaCard.defaultProps = {
  id: '',
  name: '',
  categories: [],
};

export default OrgaCard;

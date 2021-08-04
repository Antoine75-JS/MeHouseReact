import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './styles.scss';

const OrgaCard = ({ name, categories, id }) => {
  const [tasks, setTasks] = useState([]);

  // Set tasks count
  useEffect(() => {
    const taskList = [];
    categories.forEach((category) => {
      if (category.catTasks.length > 0) {
        const task = category.catTasks;
        taskList.push(task);
      }
    });
    setTasks(taskList);
  }, []);

  return (
    <>
      <Link to={`/orgas/${id}`} className="organisationsCard">
        <h2 className="organisationsCard-title">
          {name}
        </h2>
        <h3 className="organisationsCard-nbCat">
          <span className="organisationsCard-nbCat--bold">{tasks?.length}</span> tâches enregistées
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

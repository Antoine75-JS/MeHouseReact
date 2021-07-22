import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import './styles.scss';

const AnimalCard = ({ title, todos, type, id }) => {
  console.log(title, type, todos);

  return (
    <div className="animalCard">
      <Link to={`/categories/animals/${id}`}>
        <FontAwesomeIcon icon={type} size="4x" color="white" />
        <h1 className="animalCard-title">{title}</h1>
      </Link>
    </div>
  );
};

export default AnimalCard;

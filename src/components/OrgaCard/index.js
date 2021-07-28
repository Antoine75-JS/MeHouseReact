import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const OrgaCard = ({ name, categories, id }) => {
  const isEmpty = true;

  return (
    <>
      <Link to={`/orgas/${id}`} className="organisationsCard">
        <h2 className="organisationsCard--title">
          {name}
        </h2>
        <h3 className="organisationsCard--nbCat">
          {categories?.length} catégories
        </h3>
      </Link>
    </>
  );
};

export default OrgaCard;

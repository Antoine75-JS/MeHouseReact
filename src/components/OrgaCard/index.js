import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './styles.scss';

const OrgaCard = ({ name, categories, id }) => {
  console.log(categories);
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

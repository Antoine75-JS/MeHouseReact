import React from 'react';

import './styles.scss';

const OrgaCard = ({ name, categories }) => {
  const isEmpty = true;

  return (
    <div className="organisationsCard">
      <h2 className="organisationsCard--title">
        {name}
      </h2>
      <h3 className="organisationsCard--nbCat">
        {categories?.length} catégories
      </h3>
    </div>
  );
};

export default OrgaCard;

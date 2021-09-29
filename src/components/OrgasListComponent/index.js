/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import CreateOrgaModal from 'src/containers/CreateOrgaModal';

// Components
import OrgaCard from 'src/components/OrgaCard';
import Loading from 'src/components/Utils/Loading';
import Toast from 'src/containers/Toast';
import './styles.scss';

const OrgasListComponent = ({
  isModalOpen,
  openModal,
  isLoading,
  open,
  isLogged,
  userOrgas,
}) => {
  // Local states
  const [orgas, setOrgas] = useState([]);

  useEffect(() => {
    setOrgas(userOrgas);
  }, [userOrgas]);

  // Open form for Adding Orga
  const handleAddOrganization = () => {
    openModal();
    window.scroll(0, 0);
  };

  return (
    <>
      <div className="organisations">
        {isLoading && <Loading />}
        {/* Si orgas */}
        {!isLoading && orgas?.length > 0 ? (
          orgas.map((organisation) => (
            <OrgaCard
              id={organisation._id}
              key={organisation._id}
              name={organisation.orgName}
              categories={organisation.orgCategories}
            />
          ))
          // Sinon si not logged, lien pour connection
        ) : (
          !isLogged && (
            <div className="organisations-empty">
              <h2>Connectez vous pour accéder à vos organisations</h2>
              <Link to="/login">Connexion</Link>
            </div>
          ),
          // Si log mais pas d'orga
          isLogged && (
            <h2 className="organisations-empty">Vous n'avez pas encore d'organisation</h2>
          )
        )}
      </div>
      {/* Check if user is logged to display button */}
      {isLogged && (
        <div className={isModalOpen ? 'addOrganizationBtn-open' : 'addOrganizationBtn'} onClick={handleAddOrganization}>
          {!isModalOpen && <p>+</p>}
        </div>
      )}
      {/* Modal for errors & messages */}
      {open && <Toast />}
      {isModalOpen && <CreateOrgaModal />}
    </>

  );
};

OrgasListComponent.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  userOrgas: PropTypes.array.isRequired,
};

export default OrgasListComponent;

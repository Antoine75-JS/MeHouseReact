import React, { useEffect, useState } from 'react';

import api from 'src/api';
import CreateOrgaModal from 'src/containers/CreateOrgaModal';

// Components
import OrgaCard from 'src/components/OrgaCard';
import Loading from 'src/components/Loading';
import Toast from 'src/containers/Toast';
import './styles.scss';

const OrgasListComponent = ({
  isModalOpen,
  openModal,
  isLoading,
  open,
  isLogged,
  userId,
  username,
  userOrgas,
  toastMessage,
  setErrmessage,
}) => {
  // Local states

  // Open form for Adding Orga
  const handleAddOrganization = () => {
    openModal();
    window.scroll(0, 0);
  };

  return (
    <>
      <div className="organisations">
        {isLoading && <Loading />}
        {!isLoading && userOrgas?.length > 1 ? (
          userOrgas.map((organisation) => (
            <OrgaCard
              id={organisation._id}
              key={organisation._id}
              name={organisation.orgName}
              categories={organisation.orgCategories}
            />
          ))
        ) : (
          <h2>Connectez vous pour accéder à vos organisations</h2>
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

export default OrgasListComponent;

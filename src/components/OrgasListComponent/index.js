import React, { useEffect, useState } from 'react';

import api from 'src/api';
import CreateOrgaModal from 'src/containers/CreateOrgaModal';

// Components
import OrgaCard from 'src/components/OrgaCard';
import Loading from 'src/components/Loading';
import Toast from 'src/containers/Toast';
import './styles.scss';

const OrgasListComponent = ({
  loadOrgas,
  orgasList,
  isModalOpen,
  openModal,
  isLoading,
  open,
  toastMessage,
  setErrmessage,
}) => {
  console.log(orgasList);

  // Load organizations on first load
  useEffect(() => {
    loadOrgas();
  }, []);

  // Open form for Adding Orga
  const handleAddOrganization = () => {
    openModal();
    window.scroll(0, 0);
  };

  return (
    <>
      <div className="organisations">
        {isLoading && <Loading />}
        {!isLoading && orgasList.length > 0 ? (
          orgasList.map((organisation) => (
            <OrgaCard
              id={organisation._id}
              key={organisation._id}
              name={organisation.orgName}
              categories={organisation.orgCategories}
            />
          ))
        ) : (
          <h2>No organisations</h2>
        )}
      </div>
      <div className={isModalOpen ? 'addOrganizationBtn-open' : 'addOrganizationBtn'} onClick={handleAddOrganization}>
        {!isModalOpen && <p>+</p>}
      </div>
      {open && <Toast />}
      {isModalOpen && <CreateOrgaModal />}
    </>

  );
};

export default OrgasListComponent;

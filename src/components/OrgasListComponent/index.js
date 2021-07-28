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
  /* State temp */
  const [loading, setLoading] = useState(false);
  const [organisations, setOrganisations] = useState([]);

  useEffect(() => {
    loadOrgas();
  }, []);

  const handleAddOrganization = () => {
    openModal();
    window.scroll(0, 0);
  };

  return (
    <>
      <div className="organisations">
        {isLoading && <Loading />}
        {!loading && orgasList.length > 0 ? (
          orgasList.map((organisation) => (
            <OrgaCard key={organisation._id} name={organisation.orgName} categories={organisation.categories} />
          ))
        ) : (
          <h2>No organisations</h2>
        )}
        <div className={isModalOpen ? 'addOrganizationBtn-open' : 'addOrganizationBtn'} onClick={handleAddOrganization}>
          {!isModalOpen && <p>+</p>}
        </div>
      </div>
      {open && <Toast />}
      {isModalOpen && <CreateOrgaModal />}
    </>

  );
};

export default OrgasListComponent;

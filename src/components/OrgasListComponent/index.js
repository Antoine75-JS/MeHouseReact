import React, { useEffect, useState } from 'react';

import api from 'src/api';
import CreateOrgaModal from 'src/containers/CreateOrgaModal';

// Components
import OrgaCard from 'src/components/OrgaCard';
import './styles.scss';

const OrgasListComponent = ({
  isModalOpen,
  openModal,
  isLoading,
  open,
  toastMessage,
  setErrmessage,
}) => {
  console.log(isModalOpen, openModal, isLoading, open, toastMessage, setErrmessage);
  /* State temp */
  const [loading, setLoading] = useState(false);
  const [organisations, setOrganisations] = useState([]);

  useEffect(() => {
    setLoading(true);
    api.get('/orgas')
      .then((response) => {
        console.log(response);
        setOrganisations(response.data);
      })
      .catch((err) => {
        console.trace(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAddOrganization = () => {
    openModal();
    window.scroll(0, 0);
  };

  return (
    <>
      <div className="organisations">
        {!loading && organisations.length > 0 ? (
          organisations.map((organisation) => (
            <OrgaCard key={organisation._id} name={organisation.orgName} categories={organisation.categories} />
          ))
        ) : (
          <h2>No organisations</h2>
        )}
        <div className={isModalOpen ? 'addOrganizationBtn-open' : 'addOrganizationBtn'} onClick={handleAddOrganization}>
          {!isModalOpen && <p>+</p>}
        </div>
      </div>
      {isModalOpen && <CreateOrgaModal />}
    </>
  );
};

export default OrgasListComponent;

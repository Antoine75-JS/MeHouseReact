import React, { useEffect, useState } from 'react';

import api from 'src/api';
import CreateOrgaModal from 'src/containers/CreateOrgaModal';

// Components
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
    console.log('Adding Organization');
  };

  return (
    <>
      <div className="organisations">
        {!loading && organisations.length > 0 ? (
          organisations.map((organisation) => (
            <div className="organisations-card" key={organisation._id}>
              <h2 className="organisations-card--title">
                {organisation.orgName}
              </h2>
              <h3 className="organisations-card--nbCat">
                {organisation.orgCategories?.length} catégories
              </h3>
            </div>
          ))
        ) : (
          <h2>No organisations</h2>
        )}
        <div className="addOrganizationBtn" onClick={handleAddOrganization}>+</div>
      </div>
      {isModalOpen && <CreateOrgaModal />}
    </>
  );
};

export default OrgasListComponent;

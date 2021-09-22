import api from 'src/api';

import React, { useEffect } from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';

import Toast from 'src/containers/Toast';
import Header from 'src/containers/Header';
import './styles.scss';

const JoinOrga = ({ isLogged, hasInvitesInOrgas, userId, joinOrgaFromInvite, toastOpen }) => {
  // If no invites in organizations, return home
  if (hasInvitesInOrgas.length < 1) {
    return <Redirect to={"/"} />;
  }

  // Get id from params
  const { id } = useParams();

  const handleJoinOrga = (orgaId) => {
    joinOrgaFromInvite(userId, orgaId);
  };

  return (
    <>
      <Header />
      <div className="joinOrga">
        {isLogged ? (
          <>
            <h1 className="joinOrga-title">Join orga</h1>
            <div className="joinOrga-btn" onClick={() => handleJoinOrga(id)}>
              Join
            </div>
          </>
        ) : (
          <Link to={'/login'}>Veuillez vous connecter</Link>
        )}
      </div>
      {toastOpen && <Toast />}
    </>
  );
};

export default JoinOrga;

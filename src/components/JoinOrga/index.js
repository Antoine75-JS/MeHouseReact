import api from 'src/api';

import React, { useEffect } from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';

import Header from 'src/containers/Header';
import './styles.scss';

const JoinOrga = ({ isLogged, hasInvitesInOrgas, userId }) => {
  const { id } = useParams();

  const handleJoinOrga = (orgaId) => {
    console.log('joining orga', orgaId, 'userId:', userId);
    // api.get(`/invite/${id}/join`)
    api.patch(`/users/${userId}/${orgaId}/add`, {
      organizations: orgaId,
    })
      .then((response) => {
        console.log(response);
        <Redirect to={`/orgas/${orgaId}`} />
      })
      .catch((err) => {
        console.trace(err);
      });
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
    </>
  );
};

export default JoinOrga;

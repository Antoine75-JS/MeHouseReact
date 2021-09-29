import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link, Redirect } from 'react-router-dom';

import Toast from 'src/containers/Toast';
import Header from 'src/containers/Header';
import './styles.scss';

const JoinOrga = ({
  isLogged,
  hasInvitesInOrgas,
  userId,
  joinOrgaFromInvite,
  toastOpen,
  redirectUrl,
  resetRedirectUrl,
}) => {
  // If no invites in organizations, return home
  if (hasInvitesInOrgas.length < 1) {
    return <Redirect to="/" />;
  }

  // redirectUrl triggered when user join orga
  if (redirectUrl) {
    resetRedirectUrl();
    return <Redirect to={`${redirectUrl}`} />;
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
          <Link to="/login">Veuillez vous connecter</Link>
        )}
      </div>
      {toastOpen && <Toast />}
    </>
  );
};

JoinOrga.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  hasInvitesInOrgas: PropTypes.array.isRequired,
  userId: PropTypes.string,
  joinOrgaFromInvite: PropTypes.func.isRequired,
  toastOpen: PropTypes.bool.isRequired,
  redirectUrl: PropTypes.string,
  resetRedirectUrl: PropTypes.func.isRequired,
};

JoinOrga.defaultProps = {
  userId: '',
  redirectUrl: '',
};

export default JoinOrga;

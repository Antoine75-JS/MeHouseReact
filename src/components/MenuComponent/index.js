import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const MenuComponent = ({ isMenuOpen, userOrgas, hasInvitesInOrgas, closeMenu }) => {
  console.log(hasInvitesInOrgas);
  const [orgasList, setOrgasList] = useState([]);
  const [invitesList, setInvitesList] = useState([]);

  // Set user Orgas
  useEffect(() => {
    const orgas = [];
    userOrgas?.forEach((orga) => {
      orgas.push(orga);
    });
    setOrgasList(orgas);
  }, [userOrgas]);

  // Set User invites
  useEffect(() => {
    const invites = [];
    hasInvitesInOrgas?.forEach((invite) => {
      console.log(invite)
      invites.push(invite);
    });
    setInvitesList(invites);
  }, [hasInvitesInOrgas]);

  return (
    <div className={isMenuOpen ? ('menuComponent open') : ('menuComponent closed')}>
      {/* User organisations */}
      <span className="menuComponent-list--category">Organisations:</span>
      <ul className="menuComponent-list">
        {orgasList && orgasList.map((orga) => (
          <NavLink onClick={closeMenu} key={orga._id} to={`/orgas/${orga._id}`}>
            <li className="menuComponent-list--item">
              {orga.orgName}
            </li>
          </NavLink>
        ))}
      </ul>
      {/* User Invitations */}
      {invitesList.length > 0 && <span className="menuComponent-list--category">Invitations :</span>}
      <ul className="menuComponent-list">
        {
          invitesList.length > 0 && invitesList.map((invite) => (
            <li key={invite._id} className="menuComponent-list--item">
              <NavLink onClick={closeMenu} to={`/orgas/${invite._id}/join`}>
                {invite.orgName}
              </NavLink>
            </li>
          ))
        }
      </ul>

      <span className="menuComponent-list--category">Deconnexion</span>

    </div >
  );
};

export default MenuComponent;

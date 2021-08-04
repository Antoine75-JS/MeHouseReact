import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// Components & styles
import Header from 'src/containers/Header';
import Loading from 'src/components/Loading';
import ExpirationChip from 'src/components/ExpirationChip';

import './styles.scss';

const OrgaHome = ({
  isLogged,
  getOrgaDetails,
  isLoading,
  orgName,
  orgUsers,
  orgCategories,
}) => {
  console.log('name:', orgName, 'categories:', orgCategories, 'users:', orgUsers);

  // Local states
  const [tasksCpt, setTasksCpt] = useState(null);
  // const [isOpen, setIsOpen] = useState(false);

  // Get id from url params
  const { id } = useParams();

  // Get orga details from id
  useEffect(() => {
    getOrgaDetails(id);
  }, []);

  useEffect(() => {
    let cpt = 0;
    orgCategories?.forEach((category) => {
      if (category.catTasks.length > 0) {
        cpt += category.catTasks.length;
      }
    });
    setTasksCpt(cpt);
  }, []);

  return (
    <>
      <Header />
      <div className="orgaHome">
        {isLoading && <Loading />}
        {!isLoading && (
          <div>
            {/* Name */}
            <h1 className="orgaHome-title">{orgName}</h1>
            <div className="orgaHome-taskCpt">{tasksCpt} tâches enregistées</div>
            {/* Cards */}
            {orgCategories?.map((category, cpt) => (
              <Link
                to={`/orgas/cat/${category._id}`}
                className="orgaHome-categories-category"
                key={category._id}
              >

                <div className="orgaHome-taskCard--header">
                  <span className="orgaHome-categories-category--title">{category.catName} :</span>
                  <span className="orgaHome-categories-category--tasks">{category.catTasks.length} tâches enregistées</span>
                </div>
                <div className="orgaHome-taskCard--details">
                  {category.catTasks?.map((task) => (
                    <div className="orgaHome-taskCard--details_detail" key={task._id}>
                      <div className="orgaHome-taskCard--details_detail-taskName">{task.taskName} :</div>
                      <ExpirationChip creationDate={task.creationDate} />
                    </div>
                  ))}
                </div>
              </Link>
            ))}
            {/* Members */}
            <div className="orgaHome-users">
              {orgUsers.length === 1 ? (
                <span className="orgaHome-users--title">
                  {orgUsers.length} membre
                </span>
              ) : (
                <span className="orgaHome-users--title">
                  {orgUsers.length} membres
                </span>
              )}
              <div className="orgaHome-users--user">
                {/* Member */}
                {orgUsers?.map((user) => (
                  <span className="orgaHome-users--user_username" key={user._id}>{user.username}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OrgaHome;

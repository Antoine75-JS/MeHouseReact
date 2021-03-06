/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Link, useParams, Redirect } from 'react-router-dom';

// Yup validation form
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Containers
import Header from 'src/containers/Header';
import ShoppingList from 'src/containers/ShoppingList';
import EventsComponent from 'src/containers/EventsComponent';
import Toast from 'src/containers/Toast';
import InviteMemberToOrgaModal from 'src/containers/InviteUserToOrgaModal';

// Components
import Loading from 'src/components/Utils/Loading';
import ExpirationChip from 'src/components/ExpirationChip';

import './styles.scss';

// Yup validation schema
const categorySchema = yup.object().shape({
  // eslint-disable-next-line newline-per-chained-call
  categoryName: yup.string().required().typeError('Le nom dela catégorie doit contenir entre 3 et 30 caractères alphanumériques').min(3).max(30),
});

const OrgaHome = ({
  isLogged,
  getOrgaDetails,
  isLoading,
  orgName,
  orgUsers,
  orgCategories,
  orgShoppingList,
  orgEvents,
  isToastOpen,
  createCategory,
  isModalOpen,
  openModal,
  setToastMessage,
}) => {
  // RHF controlled components
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(categorySchema),
  });

  // Handle form errors
  useEffect(() => {
    if (errors.categoryName) setToastMessage('Le nom de la catégorie doit contenir entre 3 et 30 caractères sans espaces ni accents');
  }, [errors]);

  // Local states
  const [tasksCpt, setTasksCpt] = useState(null);

  // Get orga id from url params
  const { id } = useParams();

  if (!isLogged) {
    return <Redirect to="/login" />;
  }

  // Get orga details from id and refresh when url changes
  useEffect(() => {
    getOrgaDetails(id);
  }, [id]);

  // Set number of tasks
  useEffect(() => {
    let cpt = 0;
    orgCategories.forEach((category) => {
      if (category.catTasks.length > 0) {
        cpt += category.catTasks.length;
      }
    });
    setTasksCpt(cpt);
  }, [orgCategories]);

  // Create category
  const handleCreateCategory = (data) => {
    createCategory(data, id);
  };

  // Add Member
  const handleAddMember = () => {
    openModal();
    window.scroll(0, 0);
  };

  return (
    <>
      <Header />
      {isLogged && (
        <div className="orgaHome">
          {isLoading && <Loading />}
          {!isLoading && (
            <div>
              {/* Name */}
              <h1 className="orgaHome-title">{orgName}</h1>
              {/* Tasks cpt */}
              <div className="orgaHome-taskCpt">{tasksCpt} tâches enregistées</div>
              {/* Form */}
              <form onSubmit={handleSubmit(handleCreateCategory)} className="orgaHome-form">
                <input {...register('categoryName')} type="text" name="categoryName" className="orgaHome-form--input" placeholder="Ajouter une catégorie" />
                <input type="submit" value="+" className="orgaHome-form--btn" />
              </form>
              {/* Cards tasks */}
              {orgCategories?.map((category) => (
                <Link
                  to={`/orgas/cat/${category._id}`}
                  className="orgaHome-categories-category"
                  key={category._id}
                >
                  <div className="orgaHome-taskCard--header">
                    <span className="orgaHome-categories-category--title">{category.catName}</span>
                  </div>
                  <div className="orgaHome-taskCard--details">
                    {category.catTasks.length > 0 ? (
                      category.catTasks?.map((task) => (
                        <div className="orgaHome-taskCard--details_detail" key={task._id}>
                          <div className="orgaHome-taskCard--details_detail-taskName">{task.taskName}</div>
                          {task.repeat && (
                            <ExpirationChip expireDate={task.expireDate} />
                          )}
                        </div>
                      ))
                    ) : (
                      <h2>Aucune tâche enregistrée</h2>
                    )}
                  </div>
                </Link>
              ))}
              {/* Events */}
              <EventsComponent orgEvents={orgEvents} orgaId={id} />
              {/* Shopping List */}
              <ShoppingList orgShoppingList={orgShoppingList} orgaId={id} />
              {/* Members */}
              <div className="orgaHome-users">
                {orgUsers.length === 1 ? (
                  <span className="orgaHome-users--title">{orgUsers.length} membre</span>
                ) : (
                  <span className="orgaHome-users--title">{orgUsers.length} membres</span>
                )}
                <div className="orgaHome-users--container">
                  {orgUsers?.map((user) => (
                    // Set first 2 letters of user
                    <div key={user._id} className="orgaHome-users--container_user">
                      <span className="orgaHome-users--container_user-username">{user.username.slice(0, 2)}</span>
                    </div>
                  ))}
                  <div className={isModalOpen ? 'inviteUserBtn-open' : 'inviteUserBtn'} onClick={handleAddMember}>
                    {!isModalOpen && <p>+</p>}
                  </div>

                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {/* Toast & Co */}
      {isModalOpen && <InviteMemberToOrgaModal />}
      {isToastOpen && <Toast />}
    </>
  );
};

OrgaHome.propTypes = {
  isLogged: PropTypes.bool,
  getOrgaDetails: PropTypes.func.isRequired,
  isToastOpen: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  orgName: PropTypes.string.isRequired,
  orgUsers: PropTypes.array,
  orgShoppingList: PropTypes.array.isRequired,
  orgCategories: PropTypes.array.isRequired,
  orgEvents: PropTypes.array.isRequired,
  createCategory: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  setToastMessage: PropTypes.func.isRequired,
};

OrgaHome.defaultProps = {
  isLogged: false,
  orgUsers: null,
};

export default OrgaHome;

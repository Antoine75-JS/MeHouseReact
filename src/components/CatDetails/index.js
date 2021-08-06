/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, Redirect } from 'react-router-dom';

// Icons
import {
  FiRotateCw,
  FiTrash,
} from 'react-icons/fi';

// Components
import Header from 'src/containers/Header';
import Loading from 'src/components/Loading';
import Toast from 'src/containers/Toast';
import ExpirationChip from 'src/components/ExpirationChip';
import PercentBar from 'src/components/PercentBar';
import CreateTaskModal from 'src/containers/CreateTaskModal';

import './styles.scss';

const CatDetails = ({
  isModalOpen,
  isLoading,
  open,
  isLogged,
  openModal,
  deleteTask,
  resetTask,
  getCatTasks,
  catTasks,
  catName,
}) => {
  if (!isLogged) {
    return <Redirect to="/login" />;
  }

  // Get category Id
  const { id } = useParams();

  useEffect(() => {
    getCatTasks(id);
  }, []);

  const handleAddTask = () => {
    openModal();
    window.scroll(0, 0);
  };

  return (
    <>
      <Header />
      {isLoading && <Loading />}
      <div className="catDetails">
        <h1 className="catDetails-title">{catName}</h1>
        {!isLoading && (
          <div className="catDetails-tasks">
            {catTasks?.map((task) => (
              <div className="catDetails-tasks--task" key={task._id}>
                <div className="catDetails-tasks--task_taskName">{task.taskName}</div>
                {task.repeat && (
                  <>
                    <PercentBar className="catDetails-tasks--task_percentBar" creationDate={task.creationDate} expireDate={task.expireDate} />
                    <ExpirationChip className="catDetails-tasks--task_expirationDate" expireDate={task.expireDate} />
                  </>
                )}
                <div className="catDetails-tasks--task_icons">
                  <FiRotateCw className="catDetails-tasks--task_icons-icon" color="#1dab35" size="25px" strokeWidth="2.5px" onClick={() => resetTask(id, task._id)} />
                  <FiTrash className="catDetails-tasks--task_icons-icon" color="#dc143c" size="25px" strokeWidth="2.5px" onClick={() => deleteTask(id, task._id)} />
                </div>
              </div>
            ))}
          </div>
        )}
        <div className={isModalOpen ? 'addTaskBtn-open' : 'addTaskBtn'} onClick={handleAddTask}>
          {!isModalOpen && <p>+</p>}
        </div>
      </div>
      {isModalOpen && <CreateTaskModal />}
      {open && <Toast />}
    </>
  );
};

CatDetails.propTypes = {
  isModalOpen: PropTypes.bool,
  isLoading: PropTypes.bool,
  open: PropTypes.bool,
  isLogged: PropTypes.bool,
  openModal: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  getCatTasks: PropTypes.func.isRequired,
  catTasks: PropTypes.array.isRequired,
  catName: PropTypes.string.isRequired,
};

CatDetails.defaultProps = {
  isModalOpen: false,
  isLoading: false,
  open: false,
  isLogged: false,
};

export default CatDetails;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
import CreateTaskModal from 'src/containers/CreateTaskModal';

import './styles.scss';

// API
import api from 'src/api';

const CatDetails = ({
  isModalOpen,
  isLoading,
  open,
  toastMessage,
  isLogged,
  openModal,
  closeModal,
  setErrMessage,
  deleteTask,
  getCatTasks,
  catTasks,
  catName,
}) => {
  // Get category Id
  const { id } = useParams();

  // Local state
  // const [isModalOpen, setModalOpen] = useState(false);
  // const [isLoading, setLoading] = useState(false);
  // const [catName, setCatName] = useState(null);
  // const [catTasks, setCatTasks] = useState([]);

  useEffect(() => {
    getCatTasks(id);
    console.log(id, catTasks);
    // api.get(`/categories/${id}`)
    //   .then((response) => {
    //     console.log(response);
    //     setCatName(response.data.catName);
    //     setCatTasks(response.data.catTasks);
    //   })
    //   .catch((err) => console.trace(err))
    //   .finally(() => {

    //   });
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
                <ExpirationChip className="catDetails-tasks--task_expirationDate" creationDate={task.creationDate} />
                <div className="catDetails-tasks--task_icons">
                  <FiRotateCw color="#1dab35" size="25px" strokeWidth="2.5px" />
                  <FiTrash color="#dc143c" size="25px" strokeWidth="2.5px" onClick={() => deleteTask(task._id)} />
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

export default CatDetails;

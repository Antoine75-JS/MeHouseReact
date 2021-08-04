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
import ExpirationChip from 'src/components/ExpirationChip';

import './styles.scss';

// API
import api from 'src/api';

const CatDetails = () => {
  const { id } = useParams();

  // Local state
  const [isLoading, setLoading] = useState(false);
  const [catName, setCatName] = useState(null);
  const [catTasks, setCatTasks] = useState([]);

  useEffect(() => {
    setLoading(true);
    api.get(`/categories/${id}`)
      .then((response) => {
        console.log(response);
        setCatName(response.data.catName);
        setCatTasks(response.data.catTasks);
      })
      .catch((err) => console.trace(err))
      .finally(() => setLoading(false));
  }, []);

  const handleAddOrganization = () => {
    console.log('clicked');
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
                  <FiTrash color="#dc143c" size="25px" strokeWidth="2.5px" />
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="addTaskBtn" onClick={handleAddOrganization}>
          <p>+</p>
        </div>
      </div>
    </>
  );
};

export default CatDetails;

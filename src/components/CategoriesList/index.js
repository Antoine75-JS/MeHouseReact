import React from 'react';
import { Link } from 'react-router-dom';

/* Temp data */
import categoriesData from 'src/data/categories.json';

/* Styles */
import './styles.scss';

/* Icons */
import {
  FiHome,
  FiCloudRain,
  FiDollarSign,
  FiGitlab,
  FiMusic,
  FiShoppingCart
} from 'react-icons/fi';

const CategoriesList = () => {
  const isEmpty = true;
  console.log(categoriesData);

  return (
    <div className="categories">

      <Link to="/categories/home" exact>
        <div className="categories-category categories-home">
          <FiHome color="white" />
          <h2 className="categories-category--title">Home</h2>
        </div>
      </Link>

      <Link to="/categories/shopping" exact>
        <div className="categories-category categories-shopping">
          <FiShoppingCart color="white" />
          <h2 className="categories-category--title">Courses</h2>
        </div>
      </Link>

      <Link to="/categories/animals" exact>
        <div className="categories-category categories-animals">
          <FiGitlab color="white" />
          <h2 className="categories-category--title">El Gato</h2>
        </div>
      </Link>

      <Link to="/categories/bills" exact>
        <div className="categories-category categories-bills">
          <FiDollarSign color="white" />
          <h2 className="categories-category--title">Factures</h2>
        </div>
      </Link>

      <Link to="/categories/plants" exact>
        <div className="categories-category categories-plants">
          <FiCloudRain color="white" />
          <h2 className="categories-category--title">Plantes</h2>
        </div>
      </Link>

      <Link to="/categories/events" exact>
        <div className="categories-category categories-events">
          <FiMusic color="white" />
          <h2 className="categories-category--title">Events</h2>
        </div>
      </Link>
    </div>
  );
};

export default CategoriesList;

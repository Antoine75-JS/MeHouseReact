import React from 'react';
import PropTypes from 'prop-types';

import HomeComponent from 'src/containers/HomeComponent';
import Header from 'src/containers/Header';
import Loading from 'src/components/Utils/Loading';

const HomePage = ({ isLoading }) => (
  <div className="homePage">
    <Header />
    {isLoading && <Loading />}
    <>
      <HomeComponent />
    </>
  </div>
);

HomePage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default HomePage;

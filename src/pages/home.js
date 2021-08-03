import React from 'react';

import HomeComponent from 'src/containers/HomeComponent';
import Header from 'src/containers/Header';
import Loading from 'src/components/Loading';

const HomePage = ({ isLoading }) => {
  const isEmpty = true;

  return (
    <div className="homePage">
      <Header />
      {isLoading && <Loading />}
      <>
        <HomeComponent />
      </>
    </div>
  );
};

export default HomePage;

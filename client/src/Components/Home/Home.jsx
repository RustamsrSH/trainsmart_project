import React from 'react';
import Search from '../Search/Search';
import Title from '../Title/Title';
import "./Home.scss";

const Home = ({ coaches }) => {
  return (
    <div className="home">
        <div className="container">
          <div className="home__wrapper">
            <Title />
            <Search coaches={ coaches }/>
          </div>
        </div>
      </div>
  );
};

export default Home;
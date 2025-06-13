import React from 'react';
import Banner from './Banner';
import TopSellers from './TopSellers';
import Recommened from './Recommened';
import New from './New';

const Home = () => {
   return (
      <>
         <Banner />
         <TopSellers />
         <Recommened />
         <New />
      </>
   );
};

export default Home;

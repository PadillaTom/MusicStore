import React from 'react';
// Components:
import Banner from '../Components/Banner';
import PromoProducts from '../Components/PromoProducts';

const Home = () => {
  return (
    <section className='section'>
      <Banner></Banner>
      <PromoProducts></PromoProducts>
    </section>
  );
};

export default Home;

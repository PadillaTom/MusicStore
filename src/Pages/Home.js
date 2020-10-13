import React from 'react';
// Components:
import Banner from '../Components/Banner';
import PromoProductsCard from '../Components/PromoProductsCard';

const Home = () => {
  return (
    <section className='section'>
      <Banner></Banner>
      <PromoProductsCard></PromoProductsCard>
    </section>
  );
};

export default Home;

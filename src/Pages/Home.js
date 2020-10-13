import React from 'react';

// Components:
import Banner from '../Components/Banner';
import PromoProducts from '../Components/PromoProducts';
import ArtistsCardHome from '../Components/ArtistsCardHome';
import Newsletter from '../Components/Newsletter';

const Home = () => {
  return (
    <section className='section'>
      <Banner></Banner>
      <PromoProducts></PromoProducts>
      <ArtistsCardHome></ArtistsCardHome>
      <Newsletter></Newsletter>
    </section>
  );
};

export default Home;

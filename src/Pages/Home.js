import React from 'react';

// Components:
import Banner from '../Components/Banner';
import PromoProducts from '../Components/PromoProducts';
import ArtistsCardHome from '../Components/ArtistsCardHome';

const Home = () => {
  return (
    <section className='section'>
      <Banner></Banner>
      <PromoProducts></PromoProducts>
      <ArtistsCardHome></ArtistsCardHome>
    </section>
  );
};

export default Home;

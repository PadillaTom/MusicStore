import React from 'react';

// Components:
import Banner from '../Components/Banner';
import PromoProducts from '../Components/PromoProducts';
import ArtistsCardHome from '../Components/ArtistsCardHome';
import Newsletter from '../Components/Newsletter';
import Discounts from '../Components/Discounts';
import Articles from '../Components/Articles';

const Home = () => {
  return (
    <section className='section'>
      <Banner></Banner>
      <PromoProducts></PromoProducts>
      <ArtistsCardHome></ArtistsCardHome>
      <Newsletter></Newsletter>
      <Discounts></Discounts>
      <Articles></Articles>
    </section>
  );
};

export default Home;

import React from 'react';

// Components:
import Banner from '../Components/Banner';
import PromoProducts from '../Components/PromoProducts';
import ArtistsCardHome from '../Components/ArtistsCardHome';
import Newsletter from '../Components/Newsletter';
import Discounts from '../Components/Discounts';
import Articles from '../Components/Articles';
import VisitStores from '../Components/VisitStores';

const Home = () => {
  // Main:
  return (
    <section className='section'>
      <Banner></Banner>
      <PromoProducts></PromoProducts>
      <ArtistsCardHome></ArtistsCardHome>
      <Newsletter></Newsletter>
      <Discounts></Discounts>
      <Articles></Articles>
      <VisitStores></VisitStores>
    </section>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <section className='section about-sect'>
      <div className='section-title'>
        <h1>About us</h1>
      </div>
      <div className='section-center'>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/music-store-c8b9c.appspot.com/o/Others%2Fstore1.jpg?alt=media&token=89aa9262-9b60-4f84-ab25-9032b563d268'
          alt='our-store'
          className='about-img'
        />
        <div className='about-info'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quod
            fugiat id consequatur est commodi, perferendis explicabo maiores
            aspernatur. Nihil quam, maiores adipisci libero dolores, id
            repellendus autem est tempore odit molestias? Placeat, aperiam iure.
          </p>
        </div>
        <Link to='/instruments'>
          <button className='btn-about'>View Collection</button>
        </Link>
      </div>
    </section>
  );
};

export default AboutPage;

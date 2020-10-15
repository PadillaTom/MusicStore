import React from 'react';
import { ProductContext } from '../Context/ProductContext';
import BassCard from '../Components/BassCard';
import { Link } from 'react-router-dom';

const GuitarsPage = () => {
  const { products } = React.useContext(ProductContext);
  const guitars = products.filter((item) => item.class === 'guitar');
  // Main:
  return (
    <React.Fragment>
      <section className='section bass-sect'>
        <div className='section-title'>
          <h2>Guitars</h2>
        </div>
        <div className='basses-cards-container'>
          {guitars.map((guitar, guitarIndex) => {
            return <BassCard key={guitarIndex} {...guitar}></BassCard>;
          })}
        </div>
        <Link to='/instruments'>
          <p className='single-instrument-btn'>Go Back</p>
        </Link>
      </section>
    </React.Fragment>
  );
};

export default GuitarsPage;

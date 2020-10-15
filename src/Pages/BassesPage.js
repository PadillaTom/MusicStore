import React from 'react';
import { ProductContext } from '../Context/ProductContext';
import BassCard from '../Components/BassCard';
import { Link } from 'react-router-dom';

const BassesPage = () => {
  const { products } = React.useContext(ProductContext);
  const basses = products.filter((item) => item.class === 'bass');
  // Main:
  return (
    <React.Fragment>
      <section className='section bass-sect'>
        <div className='section-title'>
          <h2>Basses</h2>
        </div>
        <div className='basses-cards-container'>
          {basses.map((bass, bassIndex) => {
            return <BassCard key={bassIndex} {...bass}></BassCard>;
          })}
        </div>
        <Link to='/instruments'>
          <p className='single-instrument-btn'>Go Back</p>
        </Link>
      </section>
    </React.Fragment>
  );
};

export default BassesPage;

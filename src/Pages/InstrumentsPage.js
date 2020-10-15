import React, { useState, useEffect } from 'react';
import db from '../firebase';
import { Link } from 'react-router-dom';

const InstrumentsPage = () => {
  const [instruments, setInstruments] = useState([]);
  useEffect(() => {
    db.collection('instruments').onSnapshot((snapshot) => {
      setInstruments(snapshot.docs.map((item) => item.data()));
    });
  }, []);

  // Main:
  return (
    <React.Fragment>
      <section className='section instruments-sect'>
        <div className='section-title'>
          <h2>Our Instruments</h2>
        </div>
        <div className='instrument-cards-container'>
          {instruments.map(
            (
              { imageUrl, title, subtitle, description, id },
              instrumentsIndex
            ) => {
              // Space:
              return (
                <article className='instrument-card' key={instrumentsIndex}>
                  <img
                    src={imageUrl}
                    alt='instruments'
                    className='instrument-img'
                  />
                  <div className='instrument-info'>
                    <h3 className='instrument-title'>{title}</h3>
                    <p className='instrument-subtitle'>{subtitle}</p>
                    <p className='instrument-desc'>{description}</p>
                    {id === 1 ? (
                      <Link to='/guitars'>
                        <button className='btn-instruments'>Explore</button>
                      </Link>
                    ) : (
                      <Link to='/basses'>
                        <button className='btn-instruments'>Explore</button>
                      </Link>
                    )}
                  </div>
                </article>
              );
            }
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default InstrumentsPage;

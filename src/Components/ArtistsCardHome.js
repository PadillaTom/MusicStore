import React, { useState, useEffect } from 'react';
import db from '../firebase';

// Main:
const ArtistsCardHome = ({ imageUrl, id, name, subtitle }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    db.collection('artists').onSnapshot((snapshot) => {
      setArtists(snapshot.docs.map((item) => item.data()));
    });
  }, []);

  // Main:
  return (
    <React.Fragment>
      <section className='section artists-card-sect'>
        <div className='section-title'>
          <h2>Our Artists</h2>
        </div>
        {artists.map(({ id, imageUrl, name, subtitle }) => (
          <article className={`artist-card`} key={id}>
            <img src={imageUrl} alt={name} className='artist-card-img' />
            <div className='card-article-selector'>
              <div className={`single-selector`}></div>
              <div className={`single-selector`}></div>
              <div className={`single-selector`}></div>
            </div>
            <div className='artist-card-info'>
              <h2>{name}</h2>
              <p>{subtitle}</p>
              <p className='btn-artist-card'>Read More...</p>
            </div>
          </article>
        ))}
      </section>
    </React.Fragment>
  );
};

export default ArtistsCardHome;

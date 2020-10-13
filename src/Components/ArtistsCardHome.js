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
        {artists.map(({ id, imageUrl, name, subtitle }) => (
          <article className={`artist-card`} key={id}>
            <img src={imageUrl} alt={name} className='artist-img' />
            <div className='artist-info'>
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

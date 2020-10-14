import React, { useState, useEffect } from 'react';
import db from '../firebase';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
// Main:
const ArtistsCardHome = ({ imageUrl, id, name, subtitle }) => {
  const [artists, setArtists] = useState([]);

  const [index, setIndex] = useState(0);

  // Requesting data to Firebase:
  useEffect(() => {
    db.collection('artists').onSnapshot((snapshot) => {
      setArtists(snapshot.docs.map((item) => item.data()));
    });
  }, []);
  // Slider Last and -1 Items:
  useEffect(() => {
    const lastIndex = artists.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, artists]);
  // Auto Slide:
  useEffect(() => {
    let cleaner = setInterval(() => {
      setIndex(index + 1);
    }, 2500);
    return () => clearInterval(cleaner);
  }, [index]);

  // Main:
  return (
    <React.Fragment>
      <section className='section artists-card-sect'>
        <div className='section-title'>
          <h3>Our Artists</h3>
        </div>
        <div className='artist-card-container'>
          <div className='card-article-selector'>
            <AiOutlineLeft
              className='selector-arrow'
              onClick={() => setIndex(index - 1)}
            ></AiOutlineLeft>
            <div className='selectors-container'>
              <div className={`single-selector`}></div>
              <div className={`single-selector`}></div>
              <div className={`single-selector`}></div>
            </div>
            <AiOutlineRight
              className='selector-arrow'
              onClick={() => setIndex(index + 1)}
            ></AiOutlineRight>
          </div>
          {artists.map(({ id, imageUrl, name, subtitle }, artistIndex) => {
            // :::::::::::::::: Slider Functionality ::::::::::::::
            let position = 'nextSlide';
            // ACTIVE:
            if (artistIndex === index) {
              position = 'activeSlide';
            }
            // LAST:
            if (
              artistIndex === index - 1 ||
              (index === 0 && artistIndex === artists.length - 1)
            ) {
              position = 'lastSlide';
            }

            // Artist Card ----->
            return (
              <article className={`artist-card ${position}`} key={id}>
                <img src={imageUrl} alt={name} className='artist-card-img' />

                <div className='artist-card-info'>
                  <h2>{name}</h2>
                  <p>{subtitle}</p>
                  <p className='btn-artist-card'>Read More...</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default ArtistsCardHome;

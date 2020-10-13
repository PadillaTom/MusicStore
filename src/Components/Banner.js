import React, { useEffect, useState } from 'react';
// Images:
import data from '../SliderImgs/data';

const Banner = () => {
  const [slides, setSlides] = useState(data);
  const [index, setIndex] = useState(0);

  // Setting up the Last and -1 slides:
  useEffect(() => {
    const lastIndex = slides.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, slides]);
  // Setting up Auto Slide:
  useEffect(() => {
    let cleaner = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(cleaner);
  }, [index]);
  return (
    <section className='section banner-sect'>
      {slides.map((image, imageIndex) => {
        const { id, imageUrl } = image;
        // NEXT a todas:
        let position = 'nextSlide';
        // ACTIVE === Index:
        if (imageIndex === index) {
          position = 'activeSlide';
        }
        // LAST to Last + 0 + last of array:
        if (
          imageIndex === index - 1 ||
          (index === 0 && imageIndex === slides.length - 1)
        ) {
          position = 'lastSlide';
        }
        // Main:
        return (
          <article key={id} className={`banner-img-container ${position}`}>
            <img src={imageUrl} alt='banner-img' className='banner-img' />
          </article>
        );
      })}

      <div className='banner-info'>
        <h2>Everything is just one click away.</h2>
        <button className='btn-banner'>Discover!</button>
      </div>
    </section>
  );
};

export default Banner;

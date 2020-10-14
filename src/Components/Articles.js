import React, { useState, useEffect } from 'react';
import db from '../firebase';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  // Requesting data to Firebase:
  useEffect(() => {
    db.collection('articles').onSnapshot((snapshot) => {
      setArticles(snapshot.docs.map((item) => item.data()));
    });
  }, []);

  // Main:
  return (
    <article className='section articles-sect'>
      <div className='articles-article-container'>
        {articles.map(({ id, imageUrl, title, description }, articleIndex) => {
          // More stuff
          return (
            <article className='articles-card' key={articleIndex}>
              <img src={imageUrl} alt='' className='article-img' />
              <div className='article-info'>
                <h3 className='article-title'>{title}</h3>
                <p className='article-desc'>{description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </article>
  );
};

export default Articles;

import React from 'react';
// Context:
import { ProductContext } from '../Context/ProductContext';
// Components:
import PromoCard from '../Components/PromoCard';

const PromoProducts = () => {
  const { products } = React.useContext(ProductContext);
  const promo = products.filter((item) => item.promoted === true);

  // Main:
  return (
    <React.Fragment>
      {promo.map(({ id, imageUrl, title, subtitle, price }) => (
        <PromoCard
          key={id}
          imageUrl={imageUrl}
          title={title}
          subtitle={subtitle}
          price={price}
        ></PromoCard>
      ))}
    </React.Fragment>
  );
};

export default PromoProducts;

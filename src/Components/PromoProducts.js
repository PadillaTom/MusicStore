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
      {promo.map(({ id, imageUrl, subtitle, price, hctitle, class: style }) => (
        <PromoCard
          key={id}
          imageUrl={imageUrl}
          title={hctitle}
          subtitle={subtitle}
          price={price}
          style={style}
        ></PromoCard>
      ))}
    </React.Fragment>
  );
};

export default PromoProducts;

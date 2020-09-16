import React from 'react';
import PriceTag from '../../PriceTag/PriceTag';

function SliderItem({price, oldPrice, imageSrc}) {
  return (
    <div className="card flex-grow-0 flex-shrink-0">
      <img src={imageSrc} alt="" class="card-img-top" />
      <div className="card-body p-2">
        <PriceTag price={price} oldPrice={oldPrice} />
      </div>
    </div>
  );
}

export default SliderItem;

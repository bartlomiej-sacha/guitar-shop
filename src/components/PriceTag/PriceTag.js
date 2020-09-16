import React, {Fragment} from 'react';
import {calculateDiscount} from '../../utlis/utlis';

const DiscountTag = ({price, oldPrice}) => {
  return (
    <p className="mt-0 line text-uppercase">
      <del>{oldPrice}$</del>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-dot"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
        />
      </svg>
      {calculateDiscount(price, oldPrice)}% off
    </p>
  );
};

function PriceTag({price, oldPrice = 0}) {
  return (
    <Fragment>
      <h3 className="card-title mb-0">{price}$</h3>
      {price < oldPrice ? (
        <DiscountTag price={price} oldPrice={oldPrice} />
      ) : null}
    </Fragment>
  );
}

export default PriceTag;

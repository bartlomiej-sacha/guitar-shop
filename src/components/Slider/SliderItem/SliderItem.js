import React from 'react'
import { calculateDiscount } from '../../../utlis/utlis'

function SliderItem({ price, oldPrice, imageSrc }) {
    return (
        <div className="card flex-grow-0 flex-shrink-0">
            <img src={imageSrc} alt="" class="card-img-top" />
            <div className="card-body p-2">
                <h3 className="card-title mb-0">{price}$</h3>
                <p className="mt-0 line text-uppercase"><del>{oldPrice}$</del>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-dot" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg>
                    {calculateDiscount(price, oldPrice)}% off
                </p>
            </div>
        </div>
    )
}

export default SliderItem;
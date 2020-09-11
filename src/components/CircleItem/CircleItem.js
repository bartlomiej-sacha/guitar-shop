import React from 'react'

function PopularDestination({ imageSrc, imageHeading, imageLink }) {
    return (
        <div className="d-flex flex-column align-items-center text-center">
            <img src={imageSrc} className="image-cricle rounded-circle mb-2" alt='' />
            <h6>{imageHeading}</h6>
        </div>
    )
}

export default PopularDestination;

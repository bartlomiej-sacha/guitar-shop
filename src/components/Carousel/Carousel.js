import React, { useState } from 'react'
import image1 from '../../assets/guitar-slider1.jpg'
import image2 from '../../assets/guitar-slider2.jpg'
import image3 from '../../assets/guitar-slider3.jpg'
import { Carousel, Button } from 'react-bootstrap';

function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            < Carousel.Item interval={1000}>
                < img
                    className="carousel__img"
                    alt='electric guitar'
                    src={image1} />
                < Carousel.Caption >
                    <div className="carousel__caption-wrapper p-2 rounded">
                        <h3> Electric Guitars </h3 >
                        <Button className="carousel__caption-btn text-uppercase" variant="primary">check</Button>{' '}
                    </div>
                </Carousel.Caption >
            </Carousel.Item >
            < Carousel.Item interval={1000} >
                < img
                    className="carousel__img"
                    alt='acoustic guitar'
                    src={image2} />
                < Carousel.Caption >
                    <div className="carousel__caption-wrapper p-2 rounded">
                        <h3> Acoustic Guitars </h3 >
                        <Button className="carousel__caption-btn text-uppercase" variant="primary">check</Button>{' '}
                    </div>
                </Carousel.Caption >
            </Carousel.Item >
            < Carousel.Item interval={1000} >
                < img
                    className="carousel__img"
                    alt='guitar pedal'
                    src={image3} />
                < Carousel.Caption >
                    <div className="carousel__caption-wrapper p-2 rounded">
                        <h3> Amplifiers </h3 >
                        <Button className="carousel__caption-btn text-uppercase" variant="primary">check</Button>{' '}
                    </div>
                </Carousel.Caption >
            </Carousel.Item >
        </Carousel >
    )
}

export default Slider;
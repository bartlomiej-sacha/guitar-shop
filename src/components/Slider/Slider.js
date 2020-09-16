import React, {Fragment} from 'react';
import {Container} from 'react-bootstrap';
import SliderItem from './SliderItem/SliderItem';

function Slider({title}) {
  const handleClick = e => {
    e.preventDefault();
    const slider = document.querySelector('.slider');
    const scrollWidth = slider.scrollWidth;
    e.currentTarget.getAttribute('data-control') === 'prev'
      ? slider.scrollTo({left: -scrollWidth, behavior: 'smooth'})
      : slider.scrollTo({left: scrollWidth, behavior: 'smooth'});
  };

  return (
    <Fragment>
      <Container className="mt-4 position-relative">
        <h3>{title}</h3>
        <a
          className="carousel-control-prev position-absolute"
          role="button"
          href="#"
          data-control="prev"
          onClick={handleClick}
        >
          <span aria-hidden="true" class="carousel-control-prev-icon"></span>
        </a>
        <Container
          fluid
          className="slider mt-4 d-flex overflow-auto p-0 position-relative"
        >
          <SliderItem
            price={99.99}
            oldPrice={299.99}
            imageSrc={
              'https://res.cloudinary.com/drpag0qar/image/upload/v1599816636/parallax_wrmtve.jpg'
            }
          />
          <SliderItem
            price={99.99}
            oldPrice={299.99}
            imageSrc={
              'https://res.cloudinary.com/drpag0qar/image/upload/v1599816636/parallax_wrmtve.jpg'
            }
          />
          <SliderItem
            price={99.99}
            oldPrice={299.99}
            imageSrc={
              'https://res.cloudinary.com/drpag0qar/image/upload/v1599816636/parallax_wrmtve.jpg'
            }
          />
          <SliderItem
            price={500}
            oldPrice={299.99}
            imageSrc={
              'https://res.cloudinary.com/drpag0qar/image/upload/v1599816636/parallax_wrmtve.jpg'
            }
          />
        </Container>
        <a
          class="carousel-control-next"
          role="button"
          href="#"
          data-control="next"
          onClick={handleClick}
        >
          <span aria-hidden="true" class="carousel-control-next-icon"></span>
        </a>
      </Container>
    </Fragment>
  );
}

export default Slider;

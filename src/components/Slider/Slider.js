import React, {Fragment} from 'react';
import {Container} from 'react-bootstrap';
import SliderItem from './SliderItem/SliderItem';

function Slider({title, items}) {
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
          <span
            aria-hidden="true"
            className="carousel-control-prev-icon"
          ></span>
        </a>
        <Container
          fluid
          className="slider mt-4 d-flex overflow-auto p-0 position-relative"
        >
          {items.map(e => {
            return (
              <SliderItem
                price={e.price}
                oldPrice={e.oldPrice}
                imageSrc={e.imageSrc}
              />
            );
          })}
        </Container>
        <a
          className="carousel-control-next"
          role="button"
          href="#"
          data-control="next"
          onClick={handleClick}
        >
          <span
            aria-hidden="true"
            className="carousel-control-next-icon"
          ></span>
        </a>
      </Container>
    </Fragment>
  );
}

export default Slider;

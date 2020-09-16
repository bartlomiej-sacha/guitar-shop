import React, {Fragment} from 'react';
import Header from '../../components/Header/Header';
import CircleItemGallery from '../../components/CircleItemGallery/CircleItemGallery';
import Parallax from '../../components/Parallax/Parallax';
import Slider from '../../components/Slider/Slider';

function Home() {
  return (
    <Fragment>
      <Header />
      <CircleItemGallery />
      <Parallax
        height={'200px'}
        url={
          'https://res.cloudinary.com/drpag0qar/image/upload/v1599816636/parallax_wrmtve.jpg'
        }
      />
      <Slider title="Today's Deals" />
    </Fragment>
  );
}

export default Home;

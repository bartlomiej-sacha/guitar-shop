import React, {Fragment} from 'react';
import CircleItemGallery from '../../components/CircleItemGallery/CircleItemGallery';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
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
      <Footer />
    </Fragment>
  );
}

export default Home;

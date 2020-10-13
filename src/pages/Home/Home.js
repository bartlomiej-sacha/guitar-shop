import React, {Fragment} from 'react';
import CircleItemGallery from '../../components/CircleItemGallery/CircleItemGallery';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Parallax from '../../components/Parallax/Parallax';
import Slider from '../../components/Slider/Slider';
import data from '../../data/data.json';

function Home() {
  return (
    <Fragment>
      <Header />
      <CircleItemGallery items={data.popularDestinations} />
      <Parallax
        height={'200px'}
        url={
          'https://res.cloudinary.com/drpag0qar/image/upload/v1599816636/parallax_wrmtve.jpg'
        }
      />
      <Slider items={data.deals} title="Today's Deals" />
      <Footer />
    </Fragment>
  );
}

export default Home;

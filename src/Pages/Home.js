import React from 'react';
import Carousel from '../Components/Home/Carousel';
import Section1 from '../Components/Home/Section1';
import Section2 from '../Components/Home/Section2';
import Section3 from '../Components/Home/Section3';


const Home = () => {
  return (
    <div>
      <Carousel />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default Home;

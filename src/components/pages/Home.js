import React from 'react';
// import '../../styles/App.css';

import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Value from '../Value';
import Project from '../Project';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

import Cards from '../Cards';



function Home() {
  return (
    <>

    <HeroSection />
    <Value/>
    <Cards />
    <Project/>
    <Footer />
      {/*
     

      <Portfolio/>
      <Contact/>
 */}
 
    

    </>
  );
}

export default Home;

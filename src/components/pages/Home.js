import React , { useEffect }from 'react';

import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Value from '../Value';

// import Portfolio from '../Portfolio';
// import Contact from '../Contact';

import Cards from '../Cards';
import locomotiveScroll from "locomotive-scroll";

export const scrollRef = React.createRef();

function Home() {

 

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });
  });

  return (
    <>
 <div className="App">
         
    <div className="scroll" ref={scrollRef}>

    <HeroSection data-scroll="" data-scroll-delay="0.06" data-scroll-speed="1" data-scroll-call="dynamicColor" data-scroll-repeat="" />
    <Value data-scroll data-scroll-speed="10" data-scroll-position="top" />
    <Cards data-scroll data-scroll-speed="3" data-scroll-position="top"/>
    <Footer data-scroll data-scroll-speed="1" data-scroll-position="top" /> 
    </div>
      {/*
     
      <Portfolio/>
      <Contact/>
 */}
 
    
 </div>
    </>
  );
}

export default Home;

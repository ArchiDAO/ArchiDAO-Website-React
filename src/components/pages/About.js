import React, { Suspense } from 'react';
import Footer from '../Footer';
import { Html } from '@react-three/drei';
 import Earth from '../Earth';








function About() {
  return (
    <>
    
       <div style={{ width: "100vw", height: "80vh" }}>
        <Suspense fallback={<Html>loading...</Html>}>
           <Earth/>   
          {/* <Photo /> */}
         {/* <SpotLight castShadow penumbra={10} distance={100} angle={3} attenuation={10} anglePower={8} intensity={30} position={[50, 0, -10]}/> */}
          {/* <Babi /> */}
         </Suspense>
        
        </div>
      <Footer/>  
 
    </>
  );
}


export default About;
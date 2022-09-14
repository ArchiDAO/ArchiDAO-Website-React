import React, { Suspense } from 'react';
import '../../styles/App.css';
import Footer from '../Footer';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html , SpotLight } from '@react-three/drei';
 import Earth from '../Earth';
import Babi from '../Babi';







function About() {
  return (
    <>
    
       <div style={{ width: "100vw", height: "80vh" }}>
       
      <Canvas 
              camera={{position: [10, 0, 80], fov: 45}} >
        <ambientLight intensity={0.2} /> 
        <directionalLight position={[5, 5, 5]} intensity={0.1} />  

        <OrbitControls enableZoom={false} enablePan={true}/>  
        <Suspense fallback={<Html>loading...</Html>}>
          <Earth/>  
         {/* <SpotLight castShadow penumbra={10} distance={100} angle={3} attenuation={10} anglePower={8} intensity={30} position={[50, 0, -10]}/> */}
         </Suspense>
        </Canvas> 
        
        </div>
      <Footer/>  
 
    </>
  );
}


export default About;
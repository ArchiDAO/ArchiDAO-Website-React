import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Earth from '../Earth';
//import Effects from "../Effects";







function About() {
  return (
    <>
    
       <div style={{ width: "80vw", height: "80vh" }}>
      <Canvas 
              camera={{position: [10, 0, 80], fov: 45}} >
        <ambientLight intensity={0.5} /> 
        <directionalLight position={[-5, -5, -1]} intensity={0.5} />  

        <OrbitControls enableZoom={false} enablePan={false}/>  
         <Earth/> 
        
        </Canvas> 
        </div>
      <Footer/>  
 
    </>
  );
}


export default About;
import React, { Suspense } from 'react';
import '../../styles/App.css';
import Footer from '../Footer';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html , SpotLight } from '@react-three/drei';
 import Earth from '../Earth';
import Photo from '../Photo';
import Babi from '../BabiCircle';







function About() {
  return (
    <>
    
       <div style={{ width: "100vw", height: "80vh" }}>
<<<<<<< HEAD
=======
       
      <Canvas 
              camera={{position: [10, 0, 80], fov: 45}} >
        <ambientLight intensity={0.2} /> 
        <directionalLight position={[5, 5, 5]} intensity={0.1} />  

        <OrbitControls enableZoom={true} enablePan={true}/>  
>>>>>>> b8ce3dca15f34efcc4b89cdc6282873ee2dffd1f
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
import React from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Texture from '../images/Earth_Night.jpg';
import Normal from '../images/Earth_Normal.jpg';
import Displacement from '../images/Earth_Displacement.jpg';
import Cloud from '../images/Earth_Cloud.jpg';



export default function Earth()  {
  const myMesh = React.useRef();
  const myCloud = React.useRef();
  const myCloud2 = React.useRef();
  const [colorMap, normalMap, displacementMap, cloudMap] = useLoader(TextureLoader, [
    Texture,
    Normal,
    Displacement,
    Cloud
  ])

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    const b = a/20
    const c = a/18
    const d = a/14
    myMesh.current.rotation.y = b;
    myCloud.current.rotation.y = c;
    myCloud2.current.rotation.y = d;
  });

  return (
  
        <>

        <mesh  ref={myCloud}>
        <sphereGeometry args={[28.5, 32, 32]} attach='geometry'/>
        <meshLambertMaterial  map={cloudMap} transparent opacity={0.05}/>
        </mesh>
        <mesh  ref={myCloud2}>
        <sphereGeometry args={[28.7, 32, 32]} attach='geometry'/>
        <meshLambertMaterial  map={cloudMap} transparent opacity={0.05}/>
        </mesh>
        <mesh ref={myMesh}>
        <sphereGeometry args={[28, 32, 32]} attach='geometry'/>
        <meshLambertMaterial displacementScale={0.4} map={colorMap} normalMap={normalMap} displacementMap={displacementMap}/>
        </mesh>

        </>


  );
}

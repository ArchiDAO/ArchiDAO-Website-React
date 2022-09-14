import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Cloud from '../images/Earth_Cloud.jpg';



export default function Photo()  {

  const cloudMap = useLoader(TextureLoader, Cloud)
  const png = new Image();
  png.onload = drawScene;
  png.src = Cloud;


  function drawScene(){

    const canvas = document.getElementById("scene");
    const ctx = canvas.getContext("2d");
  
    canvas.width = png.width;
    canvas.height = png.height;
  
    ctx.drawImage(png, 0, 0);
  
    const data = ctx.getImageData(0, 0, png.width, png.height);
    ctx.clearRect(0,0,canvas.width, canvas.height);
  
    const	particles = [];
    for (let y = 0, y2 = data.height; y < y2; y++) {
      for (let x = 0, x2 = data.width; x < x2; x++) {
        if (data.data[(y * 4 * data.width) + (x * 4) + 3] > 128) {
          const particle = {
            x : x,
            y : y
          };
          particles.push(particle);
        }
      }
    }
  
    ctx.fillStyle = "white";
    for(let i=0, j=particles.length;i<j;i++){
      const particle = particles[i];
      ctx.fillRect(particle.x, particle.y, 1, 1);
    }
  
  }

  return (
  
        <>
        <mesh>
        {/* add a image from texture  */}
        <planeGeometry args={[100, 100]} attach='geometry'/>
        <pointsMaterial  map={cloudMap} />
        </mesh>
        </>


  );
}

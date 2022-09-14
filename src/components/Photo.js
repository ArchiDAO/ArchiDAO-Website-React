import React, {useEffect, useRef} from 'react';
import THREE, { CircleGeometry } from 'three';
import { useLoader,  } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Cloud from '../images/Earth_Cloud.jpg';


export default function Photo({ count = 100, temp = new CircleGeometry() }) {
  const ref = React.useRef()
  useEffect(() => {}, []);

  
  return (
console.log(ref)
    // <instancedMesh ref={ref} args={[null, null, 1]} > 
    //   <boxGeometry />
    //   <meshPhongMaterial />
    // </instancedMesh>
  );
}



// export default function Photo()  {
//     const radius = [1,2,3];
//     const centers = [1,2,3];
//     const length = [1,2,3];


// //   const geometry = new THREE.SphereGeometry( 100, 100, 100 );

// // const wireframe = new THREE.WireframeGeometry( geometry );

// // const line = new THREE.LineSegments( wireframe );

//   return (
  
//         <>
//         <mesh>
//           <lineSegments>
//           <circleGeometry args={[[10,4],[2,4]]} />
//           <lineBasicMaterial color="hotpink" transparent />
//             </lineSegments>
//         {/* <circleGeometry args={[5,32]}/> */}
        
//         </mesh>
//         </>


//   );
// }

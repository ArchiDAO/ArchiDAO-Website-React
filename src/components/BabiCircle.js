import { useMemo, useRef, Suspense } from "react";
  import { Canvas, useFrame } from "@react-three/fiber";
  import { OrbitControls, useGLTF } from "@react-three/drei";
  import { MathUtils, DoubleSide } from "three";
  



export default function Babi({ count }){

  
  
  
  
    const { offsetArray } = useMemo(() => {
      const arr = new Array(count).fill();
      return {
        offsetArray: Float32Array.from(
          arr.flatMap((_, i) => [
            MathUtils.randFloat(-10, 10),
            MathUtils.randFloat(-10, 10),
            MathUtils.randFloat(-10, 10)
          ])
        )
      };
    }, []);
  
    const $ref = useRef();
    const $material = useRef();
    const { nodes } = useGLTF("./suzanne.glb");
  
    const geometry = useMemo(() => {
      console.log(nodes.Suzanne.geometry);
      return nodes.Suzanne.geometry;
    }, [nodes]);
  
    const shaderArgs = useMemo(() => {
      return {
        side: DoubleSide,
        uniforms: {
          uTime: { value: 0 }
        },
        vertexShader: /* glsl */ `
        varying vec3 vNormal;
        varying vec3 vPos;
        attribute vec3 offset;
          void main() {
            vec3 pos = position + offset;
            vNormal = normal;
            vPos = pos;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
          } 
        `,
        fragmentShader: /* glsl */ `
        varying vec3 vPos;
        varying vec3 vNormal;
          void main() {
            gl_FragColor = vec4( vNormal, 1.0 );
          } 
        `
      };
    }, []);
  
    useFrame(({ clock }) => {
      if ($material.current) {
        $material.current.uniforms.uTime.value = clock.getElapsedTime();
      }
    });
  
    return (
      <instancedMesh ref={$ref} args={[null, null, count]}>
        <boxBufferGeometry args={[0.1, 0.1, 0.1]}>
          <instancedBufferAttribute
            attachObject={["attributes", "offset"]}
            args={[offsetArray, 3]}
          />
        </boxBufferGeometry>
        <shaderMaterial ref={$material} args={[shaderArgs]} />
      </instancedMesh>
    );
  }
  




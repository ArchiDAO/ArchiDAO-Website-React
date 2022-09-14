import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import MLT from "../images/babi.mtl";
import OBJ from "../images/babi.obj";

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

export default function Babi(){

  const materials = useLoader(MTLLoader, MLT);
  const obj = useLoader(OBJLoader, OBJ, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  console.log(obj);
  return <primitive object={obj} scale={1} />;


 

}

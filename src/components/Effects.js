import React, { useState } from 'react';
import { EffectComposer, GodRays } from "@react-three/postprocessing";
import { BlendFunction, Resizer, KernelSize } from "postprocessing";
import Sun from './Sun';


export default function Effects() {
    const [sunRef, set] = useState();
    return (
      <>
        <Sun ref={set} />
        {sunRef.current && (
          <EffectComposer multisampling={0}>
            <GodRays
              sun={sunRef.current}
              blendFunction={BlendFunction.Screen}
              samples={30}
              density={0.97}
              decay={0.96}
              weight={0.6}
              exposure={0.4}
              clampMax={1}
              width={Resizer.AUTO_SIZE}
              height={Resizer.AUTO_SIZE}
              kernelSize={KernelSize.SMALL}
              blur={true}
            />
          </EffectComposer>
        )}
      </>
    );
  } 



import React from "react";
import '../styles/HeroSection.css';
import ReactDOM from "react-dom";
//import ShadertoyReact from "shadertoy-react";

const HeroSection = () => {

    const fragmentShader = `
            mat3 rotationX( float x) 
            {
                return mat3
                (
                    1.0,0.0,0.0,
                    0.0,cos(x),sin(x),
                    0.0,-sin(x),cos(x)
                );
            }			
            
            float hash (vec2 n) 
            { 
                return fract(sin(dot(n, vec2(12.9898, 4.1414)))*43758.5453);
            }
            
            vec3 hash3( vec2 p )
            {
                vec3 q = vec3( dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)), dot(p,vec2(419.2,371.9)) );
                return fract(sin(q)*43758.5453);
            }
            
            float map (vec3 p)
            {
                vec2 u = floor(p.xz*0.005*64.0)/64.0;
                float h = hash(u);
                h = p.y - 8.0 * h * h;
                return max( min( h, 0.2), p.y-8.0 );
            }
                        
            vec4 color (vec3 ro)
            {
                float m = ro.y/8.0;
                #ifdef colorize
                return vec4( hash3(floor(ro.xz*0.005*64.0)/64.0)*m,1.0);
                #endif
                vec4 buildings = vec4 (m,m,m,1.0);
                vec4 grass = vec4(0,0.1,0,1);
                return mix(buildings,grass,step(ro.y,0.1));
            }
                        
            vec4 raymarch (vec3 ro, vec3 rd)
            {
                for (int i=0; i<256; i++)
                {
                    float t = map(ro);
                    if ( t<0.001 ) return color(ro);
                    ro+=t*rd;
                }
                return vec4(0.0);
            }
            void mainImage( out vec4 fragColor, in vec2 fragCoord )
            {
                vec2 uv = (2.0*fragCoord.xy-iResolution.xy)/iResolution.y;
                vec3 ro = vec3(iTime*2.0,25,0);
                vec3 rd = normalize(vec3(uv,2.0)*rotationX(5.65));
                fragColor = raymarch(ro,rd);
            }
            
  `;

//use this mainImage function to render the shader. Not working yet. Only on shadertoy.

//   void mainImage(out vec4 O, vec2 U) {
//     vec3 p = vec3( iTime, 3, 0 ) *9.,
//         r = iResolution,
//         d = vec3( ( U - .5*r.xy ) / r.y, 1 );
//     float t = .2;
//     for( d.yz *= mat2(4,-3,3,4)*t ; t>.1; t = min( p.y - 8.*t*t , .2 ) )
//         p += t*d, r = ceil(p/3.),
//         O += t = fract( 4e4* sin(r.x+r.z*17.) );
//     O/=2e2; }

    return (
        < >
        <div className="hero-section-container"  >
        {/* <ShadertoyReact fs={fragmentShader} className="hero-background"/> */}
        <div className="hero-text"> 
        <h1 className="hero-title">ArchiDAO</h1>
        <h2 className="hero-phrase">Finding novel ways of connecting Architecture & Blockchain in order to develop potential interventions</h2>
        </div>
        </div>
        
        </>
    )
}


export default HeroSection

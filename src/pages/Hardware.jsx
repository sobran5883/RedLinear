// import React from 'react';
// import { Canvas, extend } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { BoxGeometry, MeshStandardMaterial } from 'three';

// // Extend Three.js objects so they can be used declaratively
// extend({ BoxGeometry, MeshStandardMaterial });

// const Scene = () => {
//   return (
//     <Canvas style={{ height: '100vh' }}>
//       {/* Adding ambient light */}
//       <ambientLight intensity={0.5} />
//       {/* Adding directional light */}
//       <directionalLight position={[0, 10, 5]} intensity={1} />

//       {/* Cube mesh */}
//       <mesh>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color="red" />
//       </mesh>

//       {/* Controls for rotating the scene */}
//       <OrbitControls />
//     </Canvas>
//   );
// };

// export default Scene;


import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/bot.glb'); // Path relative to the 'public' folder

  return (
    <primitive object={scene} scale={5} /> // Adjust the scale as necessary
  );
}

const Hardware = () => {
  return (
    <div className='pt-20'>
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Model />
          <OrbitControls />
        </Canvas>
    </div>
  );
};

export default Hardware;


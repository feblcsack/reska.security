// import React, { useRef, useEffect } from 'react';
// import { Canvas, useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';

// // Definisikan tipe untuk props
// interface ThreeDObjectProps {
//   modelUrl: string;
// }

// const ThreeDObject: React.FC<ThreeDObjectProps> = ({ modelUrl }) => {
//   // Memuat model GLTF dengan useLoader dan tipe yang benar
//   const gltf = useLoader(GLTFLoader, modelUrl);
  
//   // Ref untuk mesh 3D yang dimuat
//   const meshRef = useRef<THREE.Group>(null);

//   useEffect(() => {
//     if (meshRef.current) {
//       console.log(`Loaded model from ${modelUrl}`);
//     }
//   }, [gltf, modelUrl]);

//   return (
//     <Canvas 
//       style={{ width: '100%', height: '100%' }} 
//       camera={{ position: [4, 5, 7], fov: 35 }} // Mengatur posisi dan FOV kamera
//     >
//       {/* Ambient light to provide basic lighting */}
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} intensity={1} />
//       <pointLight position={[-10, -10, -10]} intensity={1} />
//       <directionalLight position={[5, 5, 5]} intensity={1} />
      
//       {/* Menggunakan objek 3D dari model yang dimuat */}
//       <primitive object={gltf.scene} ref={meshRef} />
      
//       {/* Orbit controls untuk memudahkan interaksi dengan model */}
//       <OrbitControls />
//     </Canvas>
//   );
// };

// export default ThreeDObject;

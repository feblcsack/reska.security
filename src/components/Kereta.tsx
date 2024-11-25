import { Canvas, extend } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Group } from "three";
import { useRotateAnimation } from "../func/rotateAnimation";
import { useFloatAnimation } from "../func/floatAnimation";

extend({ OrbitControls });

// Komponen Kereta
const Train = ({ scale, position, rotation }: any) => {
  const { scene } = useGLTF("/3D/kereta.glb"); // Ganti path ini sesuai lokasi file .glb Anda
  return <primitive object={scene} scale={scale} position={position} rotation={rotation} />;
};

const Scene = () => {
  const rotateGroupRef = useRef<Group>(null!);
  const trainRef = useRef<Group>(null!);

  useRotateAnimation(rotateGroupRef);
  useFloatAnimation(trainRef, 1200); // Animasi floating untuk kereta

  return (
    <>
      <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} />
      <ambientLight intensity={8} />
      <group position={[0, 0, 0]}>
        <directionalLight intensity={5} position={[30, 50, 30]} />
        <directionalLight intensity={5} position={[-30, -15, -30]} />
        <group ref={rotateGroupRef}>
          <group ref={trainRef}>
            <Train
              scale={22} // Ukuran kereta sesuai styling
              position={[0, 0, 0]}
              rotation={[0, Math.PI / 4, 0]} // Rotasi agar lebih menarik
            />
          </group>
        </group>
      </group>
    </>
  );
};

const Train3D = () => {
  return (
    <Canvas
      className="h-[350px] w-screen md:h-[300px] md:w-[500px]"
      camera={{ position: [0, 0, 82] }}>
      <Suspense fallback={null}>
        <Scene />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
};

export default Train3D;

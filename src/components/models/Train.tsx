import React from 'react';
import { useGLTF, GroupProps } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

interface ModelProps extends GroupProps {
  // Tipe tambahan jika ada properti lain yang ingin diteruskan
}

interface GLTFModel extends GLTF {
  nodes: {
    Cube004_Material002_0: THREE.Mesh;
    Plane_Material001_0: THREE.Mesh;
  };
  materials: {
    'Material.002': THREE.Material;
    'Material.001': THREE.Material;
  };
}

export function Kereta(props: ModelProps) {
  const { nodes, materials } = useGLTF('/3D/kereta.glb') as GLTFModel; // Menambahkan tipe GLTFModel
  
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.006}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_Material002_0.geometry}
            material={materials['Material.002']}
            position={[-45.245, -200, -7.026]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={64.066}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_Material001_0.geometry}
            material={materials['Material.001']}
            position={[-45.245, -200, -7.026]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={64.066}
          />
        </group>
      </group>
    </group>
  );
}

// Preload the GLTF model
useGLTF.preload('/3D/kereta.glb');

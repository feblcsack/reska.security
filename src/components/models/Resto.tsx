
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import * as THREE from 'three';

interface GLTFResult extends GLTF {
  nodes: {
    Object_28: THREE.Mesh;
    Object_29: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_22: THREE.Mesh;
    Object_24: THREE.Mesh;
    Object_26: THREE.Mesh;
    Object_31: THREE.Mesh;
    Object_33: THREE.Mesh;
    Object_35: THREE.Mesh;
    Object_37: THREE.Mesh;
    Object_39: THREE.Mesh;
    Object_41: THREE.Mesh;
    Object_43: THREE.Mesh;
  };
  materials: {
    ChairColor: THREE.MeshStandardMaterial;
    ChairSeatCover: THREE.MeshStandardMaterial;
    VIP_BlackTexture: THREE.MeshStandardMaterial;
    Brushed_Metal: THREE.MeshStandardMaterial;
    Trays: THREE.MeshStandardMaterial;
    Coffee_Cups: THREE.MeshStandardMaterial;
    Black_Coffee_Maker: THREE.MeshStandardMaterial;
    Brownie: THREE.MeshStandardMaterial;
    Cookie: THREE.MeshStandardMaterial;
    Flower: THREE.MeshStandardMaterial;
    Stems: THREE.MeshStandardMaterial;
    Leaves: THREE.MeshStandardMaterial;
    Glassware: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    material_0: THREE.MeshStandardMaterial;
  };
}

interface ModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}

export function Resto(props: ModelProps) {
  const { nodes, materials } = useGLTF('/3D/resto.glb') as GLTFResult;

  // Make sure that nodes and materials are defined before rendering
  if (!nodes || !materials) {
    return null; // You can add a loading state or fallback UI here
  }

  return (
    <group {...props} dispose={null}>
      <group position={[-0.012, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.40}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[3.438, 1.395, -0.018]} scale={0.533}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_28.geometry}
              material={materials.ChairColor}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_29.geometry}
              material={materials.ChairSeatCover}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.VIP_BlackTexture}
            position={[-3.487, 1.288, -0.601]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.VIP_BlackTexture}
            position={[-3.473, 1.288, -4.958]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.Brushed_Metal}
            position={[-3.487, 2.272, 3.687]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.VIP_BlackTexture}
            position={[-3.521, 1.288, 3.706]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials.Trays}
            position={[-3.489, 1.938, -0.581]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials.Coffee_Cups}
            position={[-3.287, 2.31, -3.284]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            material={materials.Brushed_Metal}
            position={[-3.354, 2.529, -5.293]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_24.geometry}
            material={materials.Black_Coffee_Maker}
            position={[-3.354, 2.529, -5.293]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_26.geometry}
            material={materials.Black_Coffee_Maker}
            position={[-3.354, 2.529, -5.293]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20.geometry}
            material={materials.Black_Coffee_Maker}
            position={[-3.375, 3.291, -5.293]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_22.geometry}
            material={materials.Cookie}
            position={[-2.902, 1.943, -1.959]}
            scale={0.085}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_31.geometry}
            material={materials.VIP_BlackTexture}
            position={[3.438, 1.395, -0.018]}
            scale={0.533}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_33.geometry}
            material={materials.material}
            position={[3.438, 1.395, -0.018]}
            scale={0.533}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_35.geometry}
            material={materials.material_0}
            position={[3.438, 1.395, -0.018]}
            scale={0.533}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_37.geometry}
            material={materials.Flower}
            position={[3.438, 1.395, -0.018]}
            scale={0.533}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_39.geometry}
            material={materials.Stems}
            position={[3.438, 1.395, -0.018]}
            scale={0.533}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_41.geometry}
            material={materials.Leaves}
            position={[3.438, 1.395, -0.018]}
            scale={0.533}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_43.geometry}
            material={materials.Glassware}
            position={[3.438, 1.395, -0.018]}
            scale={0.533}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/3D/resto.glb');

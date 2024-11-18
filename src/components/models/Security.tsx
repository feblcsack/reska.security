
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { GroupProps } from '@react-three/fiber';

// Gunakan tipe yang lebih fleksibel atau mengkonversinya ke `unknown`
type ModelProps = GroupProps;

interface GLTFModel {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
}

export function Security(props: ModelProps) {
  // Konversi tipe ke `unknown` terlebih dahulu sebelum casting ke tipe `GLTFModel`
  const { nodes, materials } = useGLTF('/3D/security.glb') as unknown as GLTFModel;

  return (
    <group {...props} dispose={null}>
      <group position={[0, -3, 5.602]} rotation={[-Math.PI / 2, 0, 0]} scale={0.354}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SecurityCamera_lambert1_0.geometry}
            material={materials.lambert1}
            position={[0, 0, -11.896]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SecurityCamera_Team3_Sanchez_SecuirtyCameraOnButton_0.geometry}
            material={materials.Team3_Sanchez_SecuirtyCameraOnButton}
            position={[0, 0, -11.896]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SecurityCamera_Team3_Sanchez_SecurityCameraBase_0.geometry}
            material={materials.Team3_Sanchez_SecurityCameraBase}
            position={[0, 0, -11.896]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SecurityCamera_Team3_Sanchez_SecurityCameraBolt_0.geometry}
            material={materials.Team3_Sanchez_SecurityCameraBolt}
            position={[0, 0, -11.896]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SecurityCamera_Team3_Sanchez_SecuruityCameraLens_0.geometry}
            material={materials.Team3_Sanchez_SecuruityCameraLens}
            position={[0, 0, -11.896]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SecurityCameraBase_Team3_Sanchez_SecurityCameraBase_0.geometry}
            material={materials.Team3_Sanchez_SecurityCameraBase}
            position={[0, 0, -11.896]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SecurityCameraBase_Team3_Sanchez_SecurityCameraBolt_0.geometry}
            material={materials.Team3_Sanchez_SecurityCameraBolt}
            position={[0, 0, -11.896]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/3D/security.glb');

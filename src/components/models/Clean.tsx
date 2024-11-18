
import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import * as THREE from 'three'

interface ModelProps extends GroupProps {}

export function Clean(props: ModelProps) {
  const { nodes, materials } = useGLTF('/3D/clean.glb')

  // Casting nodes to THREE.Mesh so we can access geometry
  const object2001 = nodes.Object_2001 as THREE.Mesh

  return (
    <group {...props} dispose={null}>
      <group position={[-4.27, -3, 0]} rotation={[-Math.PI, Math.PI / 2, 0]} scale={0.053}>
        <mesh
          castShadow
          receiveShadow
          geometry={object2001.geometry}
          material={materials.initialShadingGroup}
          position={[0, 0, 80.759]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/3D/clean.glb')

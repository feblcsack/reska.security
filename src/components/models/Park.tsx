
import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import * as THREE from 'three'

interface ModelProps extends GroupProps {}

export function Park(props: ModelProps) {
  const { nodes, materials } = useGLTF('/3D/parkir.glb')

  // Cast the nodes to THREE.Mesh to access geometry
  const object10001 = nodes.Object_10001 as THREE.Mesh
  const object2 = nodes.Object_2 as THREE.Mesh
  const object3 = nodes.Object_3 as THREE.Mesh
  const object4001 = nodes.Object_4001 as THREE.Mesh
  const object5 = nodes.Object_5 as THREE.Mesh
  const object6001 = nodes.Object_6001 as THREE.Mesh
  const object7 = nodes.Object_7 as THREE.Mesh
  const object8001 = nodes.Object_8001 as THREE.Mesh
  const object9 = nodes.Object_9 as THREE.Mesh

  return (
    <group {...props} dispose={null}>
      <group position={[-0.03, -1.5, 0]} rotation={[-Math.PI, -0.033, 0]} scale={0.015}>
        <mesh
          castShadow
          receiveShadow
          geometry={object10001.geometry}
          material={materials.color_6383466}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={object2.geometry}
          material={materials['color_-1028593425']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={object3.geometry}
          material={materials.color_10988977}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={object4001.geometry}
          material={materials.color_14541540}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={object5.geometry}
          material={materials.color_15277357}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={object6001.geometry}
          material={materials.color_16311991}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={object7.geometry}
          material={materials.color_16448250}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={object8001.geometry}
          material={materials.color_2829873}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={object9.geometry}
          material={materials.color_3888547}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/3D/parkir.glb')

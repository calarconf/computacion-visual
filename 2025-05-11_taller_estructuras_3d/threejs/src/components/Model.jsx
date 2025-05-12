import React, { useMemo } from 'react'
import { useGLTF, Edges } from '@react-three/drei'
import * as THREE from 'three'

export function Model({ showEdges, showVertices, ...props }) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  
  // Componente para mostrar vértices
  const Vertices = useMemo(() => {
    if (!showVertices) return null
    const geometry = nodes.Object_2.geometry
    const positions = geometry.attributes.position.array
    
    return (
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="hotpink"
          size={0.03}
          sizeAttenuation={false}
        />
      </points>
    )
  }, [showVertices, nodes])

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['Scene_-_Root']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1} // Ajusta según necesidad
      >
        {showEdges && (
          <Edges
            threshold={0}
            color="cyan"
            linewidth={2}
          />
        )}
      </mesh>
      {Vertices}
    </group>
  )
}

useGLTF.preload('/scene.gltf')
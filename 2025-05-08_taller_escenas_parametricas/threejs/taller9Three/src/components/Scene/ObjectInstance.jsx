import { useMemo } from 'react'
import * as THREE from 'three'

const ObjectInstance = ({ index, controls }) => {
  const { position, color, scale } = useMemo(() => {
    const position = [
      index * controls.spacing - (controls.objectCount * controls.spacing) / 2,
      0,
      0
    ]
    
    const color = new THREE.Color(controls.baseColor)
      .offsetHSL(index * controls.colorVariation, 0, 0)
      .getHex()
    
    const scale = controls.adaptiveScale
      ? [1 + Math.sin(index * 0.5), 1, 1]
      : [1, 1, 1]

    return { position, color, scale }
  }, [index, controls])

  const geometryType = useMemo(() => 
    index % 2 === 0 ? 'box' : 'sphere', 
  [index])

  return (
    <mesh
      position={position}
      scale={scale}
      rotation={[0, index * controls.rotationSpeed, 0]}
    >
      {geometryType === 'box' ? (
        <boxGeometry args={[1, 1, 1]} />
      ) : (
        <sphereGeometry args={[0.5, 32, 32]} />
      )}
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default ObjectInstance

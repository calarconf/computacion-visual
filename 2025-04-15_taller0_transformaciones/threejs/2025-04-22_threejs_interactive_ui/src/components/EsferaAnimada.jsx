import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function EsferaAnimada() {
  const meshRef = useRef()
  const scaleFactor = useRef(1)
  
  useFrame(({ clock }) => {
    if (!meshRef.current) return
    
    const time = clock.elapsedTime
    
    // 1. Movimiento senoidal
    meshRef.current.position.x = Math.sin(time) * 3
    meshRef.current.position.y = Math.cos(time * 0.5) * 2
    
    // 2. Rotación
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.005
    
    // 3. Escalado pulsante
    scaleFactor.current = 1 + Math.sin(time * 2) * 0.2
    meshRef.current.scale.setScalar(scaleFactor.current)
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#18cae6" 
        roughness={0.2}
        metalness={0.3}
      />
    </mesh>
  )
}
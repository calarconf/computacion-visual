// src/components/Scene.jsx
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Leva, useControls } from 'leva'

function ChildMesh({ position = [0, 0, 0], color = 'hotpink' }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function IntermediateGroup() {
  const ref = useRef()
  const { rotationSpeed } = useControls('Nivel Intermedio', {
    rotationSpeed: { value: 0.5, min: 0, max: 2 }
  })

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * rotationSpeed
  })

  return (
    <group ref={ref} position={[1, 0, 0]}>
      <ChildMesh position={[0, 0.75, 0]} color="orange" />
      <ChildMesh position={[0, -0.75, 0]} color="cyan" />
    </group>
  )
}

export function ParentGroup() {
  const ref = useRef()
  const controls = useControls('Grupo Padre', {
    rotationSpeed: { value: 1, min: 0, max: 3 },
    xPosition: { value: 0, min: -5, max: 5 },
    yPosition: { value: 0, min: -5, max: 5 },
    zPosition: { value: 0, min: -5, max: 5 }
  })

  useFrame((state, delta) => {
    ref.current.rotation.x += delta * controls.rotationSpeed
    ref.current.position.set(controls.xPosition, controls.yPosition, controls.zPosition)
  })

  return (
    <group ref={ref}>
      <IntermediateGroup />
      <ChildMesh position={[0, 0, 1.5]} color="green" />
      <ChildMesh position={[0, 0, -1.5]} color="blue" />
    </group>
  )
}

export default function Scene() {
  return (
    <>
      <Leva collapsed />
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ParentGroup />
      </Canvas>
    </>
  )
}
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { SceneObjects } from './SceneObjects'
import { Lights } from './Lights'

export const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 10, 15], fov: 50 }}>
      <Lights />
      <SceneObjects />
      <OrbitControls />
    </Canvas>
  )
}
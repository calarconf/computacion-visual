import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from './Model.jsx'

export default function App() {
  return (
    <Canvas camera={{ position: [5, 2, 5], fov: 50  }}>
      <ambientLight intensity={1.5} />
     
      <directionalLight
      color={0xffffff}
      position={[6, 6, 6]} 
      intensity={2} 
      castShadow
      />
      <pointLight position={[10, 10, 10]} />
      <Model />
      <OrbitControls 
        minDistance={1} 
        maxDistance={20}
        enablePan={true}
        target={[0, 1, 0]} // Punto central de enfoque
      />
      <gridHelper args={[10, 10]} />
    </Canvas>
  )
}
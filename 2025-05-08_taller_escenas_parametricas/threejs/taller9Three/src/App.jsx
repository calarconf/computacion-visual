import { Canvas } from '@react-three/fiber'
import Scene from './components/Scene'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [10, 10, 10], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  )
}

export default App
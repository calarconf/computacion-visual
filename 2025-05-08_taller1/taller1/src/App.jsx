import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import './App.css'
import { Model } from './components/Model.jsx'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0 }}>
      <Canvas
        // camera={{ position: [0, 0, 5], fov: 75 }}
        // style={{ background: '#2d2d2d' }} 
      >
        <Environment preset='studio'/>
        <OrbitControls />
        <Model />
      </Canvas>
    </div>
  )
  
}

export default App

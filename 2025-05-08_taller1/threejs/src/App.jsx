import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import './App.css'
import { Model } from './components/Model.jsx'
import { useState } from 'react'

function App() {
  const [showEdges, setShowEdges] = useState(true)
  const [showVertices, setShowVertices] = useState(true)

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0 }}>
      {/* Controles de UI */}
      <div className="controls">
        <label>
          <input
            type="checkbox"
            checked={showEdges}
            onChange={(e) => setShowEdges(e.target.checked)}
          />
          Mostrar aristas
        </label>
        <label>
          <input
            type="checkbox"
            checked={showVertices}
            onChange={(e) => setShowVertices(e.target.checked)}
          />
          Mostrar vértices
        </label>
      </div>

      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: '#1a1a1a' }}
      >
        <Environment preset="studio" />
        <OrbitControls
          minDistance={3}
          maxDistance={15}
          enablePan={true}
        />
        <Model showEdges={showEdges} showVertices={showVertices} />
      </Canvas>
    </div>
  )
}

export default App
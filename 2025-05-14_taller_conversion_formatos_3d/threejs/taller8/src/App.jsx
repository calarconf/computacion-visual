import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Bounds, Html } from '@react-three/drei'
import { Model } from './components/Model.jsx'
import { STLModel } from './components/STLModel'
import { OBJModel } from './components/OBJModel'
import { useState, useRef, useEffect } from 'react'

function App() {
  const [selectedModel, setSelectedModel] = useState('all')
  const [showEdges, setShowEdges] = useState(true)
  const [showVertices, setShowVertices] = useState(true)
  const boundsRef = useRef()
  const controlsRef = useRef()
  

  // Auto-ajustar vista al cambiar modelo
  useEffect(() => {
    if (boundsRef.current) {
      boundsRef.current.fit()
    }
  }, [selectedModel])

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0 }}>
      {/* Controles de UI mejorados */}
      <div className="controls" style={{
        position: 'fixed',
        top: '10px',
        left: '10px',
        zIndex: 1000,
        background: 'rgba(0,0,0,0.7)',
        padding: '10px',
        borderRadius: '5px'
      }}>
        <div>
          <button 
            onClick={() => setSelectedModel('all')}
            style={{ background: selectedModel === 'all' ? '#2196F3' : '#555' }}
          >
            Todos los modelos
          </button>
          <button 
            onClick={() => setSelectedModel('gltf')}
            style={{ background: selectedModel === 'gltf' ? '#2196F3' : '#555' }}
          >
            Modelo GLTF
          </button>
          <button 
            onClick={() => setSelectedModel('stl')}
            style={{ background: selectedModel === 'stl' ? '#2196F3' : '#555' }}
          >
            Modelo STL
          </button>
          <button 
            onClick={() => setSelectedModel('obj')}
            style={{ background: selectedModel === 'obj' ? '#2196F3' : '#555' }}
          >
            Modelo OBJ
          </button>
        </div>
        
        <div style={{ marginTop: '10px' }}>
          <label>
            <input
              type="checkbox"
              checked={showEdges}
              onChange={(e) => setShowEdges(e.target.checked)}
            />
            Aristas
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="checkbox"
              checked={showVertices}
              onChange={(e) => setShowVertices(e.target.checked)}
            />
            Vértices
          </label>
        </div>
      </div>

      <Canvas
        camera={{ position: [15, 15, 15], fov: 45 }}
        style={{ background: '#1a1a1a' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        
        <Bounds ref={boundsRef}>
          {/* Modelo GLTF */}
          {(selectedModel === 'all' || selectedModel === 'gltf') && (
            <Model 
              showEdges={showEdges}
              showVertices={showVertices}
              position={[5, 0, 0]}
              scale={1.5}
            />
          )}

          {/* Modelo STL */}
          {(selectedModel === 'all' || selectedModel === 'stl') && (
            <STLModel 
              position={[5, 0, 0]}
              scale={0.2}
            />
          )}

          {/* Modelo OBJ */}
          {(selectedModel === 'all' || selectedModel === 'obj') && (
            <OBJModel 
              position={[0, 0, 5]}
              scale={10.2}
            />
          )}
        </Bounds>

        <OrbitControls
          ref={controlsRef}
          minDistance={5}
          maxDistance={50}
          enablePan={true}
          makeDefault
        />

        <Environment preset="studio" />
        <gridHelper args={[20, 20]} />
      </Canvas>
    </div>
  )
}

export default App
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Edges, Points } from '@react-three/drei'
import {Model} from './Components/Model.jsx'
import { useState } from 'react'

export default function App() {
  const [showWireframe, setShowWireframe] = useState(false)
  const [showEdges, setShowEdges] = useState(false)
  const [showPoints, setShowPoints] = useState(false)

  return (
    <>
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <Model 
          showWireframe={showWireframe}
          showEdges={showEdges}
          showPoints={showPoints}
        />
        
        <OrbitControls />
        <gridHelper args={[10, 10]} />
      </Canvas>

      <div className="controls">
        <label>
          <input type="checkbox" checked={showWireframe} onChange={(e) => setShowWireframe(e.target.checked)} />
          Wireframe
        </label>
        <label>
          <input type="checkbox" checked={showEdges} onChange={(e) => setShowEdges(e.target.checked)} />
          Edges
        </label>
        <label>
          <input type="checkbox" checked={showPoints} onChange={(e) => setShowPoints(e.target.checked)} />
          Points
        </label>
      </div>
    </>
  )
}
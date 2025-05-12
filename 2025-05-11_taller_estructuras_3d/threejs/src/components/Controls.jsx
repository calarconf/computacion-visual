import { useState } from 'react'

export default function Controls() {
  const [showEdges, setShowEdges] = useState(true)
  const [showVertices, setShowVertices] = useState(true)

  return (
    <div style={{
      position: 'absolute',
      top: '10px',
      left: '10px',
      zIndex: 1000,
      background: 'rgba(0,0,0,0.7)',
      padding: '10px',
      color: 'white'
    }}>
      <label>
        <input
          type="checkbox"
          checked={showEdges}
          onChange={(e) => setShowEdges(e.target.checked)}
        />
        Mostrar aristas
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={showVertices}
          onChange={(e) => setShowVertices(e.target.checked)}
        />
        Mostrar vértices
      </label>
    </div>
  )
}
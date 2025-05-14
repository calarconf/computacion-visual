import { Noise } from 'noisejs'
import { memo } from 'react'

const AdaptiveStructures = memo(({
  gridSize,
  scaleFactor,
  noiseIntensity,
  colorA,
  colorB,
  structureType
}) => {
  const noise = new Noise(Math.random())
  
  return (
    <group>
      {Array.from({ length: gridSize * gridSize }).map((_, i) => {
        // Calcular posición en grid
        const x = (i % gridSize) - gridSize/2
        const z = Math.floor(i / gridSize) - gridSize/2
        
        // Generar altura con noise
        const height = noise.simplex2(x * 0.5, z * 0.5) * noiseIntensity
        
        // Determinar tipo de estructura
        const isCube = structureType === 'mixed' 
          ? Math.random() > 0.5 
          : structureType === 'cubes'
        
        // Color interpolado
        const colorMix = `hsl(${
          (Math.abs(height) * 30 + 180) % 360
        }, 70%, 60%)`

        return (
          <mesh
            key={i}
            position={[
              x * 2.5, 
              Math.max(0, height), 
              z * 2.5
            ]}
            scale={[
              scaleFactor,
              scaleFactor + Math.abs(height),
              scaleFactor
            ]}
          >
            {isCube ? (
              <boxGeometry args={[1, 1, 1]} />
            ) : (
              <sphereGeometry args={[0.5, 16, 16]} />
            )}
            
            <meshStandardMaterial 
              color={height > 0 ? colorA : colorB}
              metalness={height * 0.2}
              roughness={1 - Math.abs(height) * 0.3}
            />
          </mesh>
        )
      })}
    </group>
  )
})

export default AdaptiveStructures
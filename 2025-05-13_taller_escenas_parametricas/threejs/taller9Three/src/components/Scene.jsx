import { OrbitControls, Stars } from '@react-three/drei'
import Shapes from './Shapes'
import { useControls } from 'leva'
import AdaptiveStructures from './AdaptativeStructures'

const Scene = () => {
    // Controles de Leva
  const controls = useControls('Parameters', {
    gridSize: { value: 5, min: 1, max: 20, step: 1 },
    scaleFactor: { value: 0.5, min: 0.1, max: 2 },
    noiseIntensity: { value: 2, min: 0, max: 5 },
    colorA: '#ff4757',
    colorB: '#2ed573',
    structureType: { options: ['cubes', 'spheres', 'mixed'] }
  })

  // Array de objetos a renderizar
  const objectsData = [
  {
    type: 'box',
    position: [2, 1, -3],
    rotation: [0, Math.PI/4, 0], // Rotación en radianes (X, Y, Z)
    scale: [1, 2, 1],            // Escala en cada eje [X, Y, Z]
    color: '#ff6b6b',
    geometryArgs: [1, 1, 1]       // Parámetros para boxGeometry [width, height, depth]
  },
{
    type: 'box',
    position: [8, 0, -1],
    rotation: [0, Math.PI/8, 0], // Rotación en radianes (X, Y, Z)
    scale: [2, 2, 3],            // Escala en cada eje [X, Y, Z]
    color: '#00ff00',
    geometryArgs: [1, 1, 1]       // Parámetros para boxGeometry [width, height, depth]
  },
  {
    type: 'sphere',
    position: [-3, 2, 1],
    rotation: [Math.PI/6, 0, 0],
    scale: [1.5, 1.5, 1.5],
    color: '#0000ff',
    geometryArgs: [1, 32, 32]     // Parámetros para sphereGeometry [radius, widthSegments, heightSegments]
  }
]


  return (
    <>
      {/* Luces */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {/* Controles de cámara */}
      <OrbitControls enableZoom={true} />
      
      {/* Fondo estrellado (opcional) */}
      <Stars radius={100} depth={50} count={5000} factor={4} />
      
      {/* Ejes de referencia */}
      <gridHelper args={[20, 20]} />
      <AdaptiveStructures {...controls} />
      {/* Mapeo de objetos */}
      <Shapes objects={objectsData} />
    </>
  )
}

export default Scene
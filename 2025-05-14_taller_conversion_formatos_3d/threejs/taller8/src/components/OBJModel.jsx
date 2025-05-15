import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three-stdlib'

export function OBJModel(props) {
  const model = useLoader(OBJLoader, '/Barril.obj')
  
  // Si el modelo OBJ no tiene materiales
  return (
    <primitive 
      object={model}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={15.2}
      {...props}
    >
      <meshStandardMaterial color="#7f7fff" />
    </primitive>
  )
}

useLoader.preload(OBJLoader, '/Barril.obj')
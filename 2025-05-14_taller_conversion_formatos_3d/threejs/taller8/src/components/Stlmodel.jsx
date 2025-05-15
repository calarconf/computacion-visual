import { useLoader } from '@react-three/fiber'
import { STLLoader } from 'three-stdlib'

export function STLModel(props) {
  const geometry = useLoader(STLLoader, '/dode.stl')
  return (
    <mesh 
      geometry={geometry}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={0.1}
      {...props}
    >
      <meshStandardMaterial color="#ff7f7f" />
    </mesh>
  )
}

useLoader.preload(STLLoader, '/dode.stl')
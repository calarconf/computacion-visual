import { useGLTF } from '@react-three/drei'
import { Edges } from '@react-three/drei'

export default function Model() {
  const { scene } = useGLTF('/models/scene.gltf')
  
  return (
    <primitive 
      object={scene} 
      scale={[2, 2, 2]} // Ajusta según necesidad      
    />

  )
}
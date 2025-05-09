import { useGLTF } from '@react-three/drei'
import { Edges } from '@react-three/drei'

export default function Model() {
  const { scene } = useGLTF('/models/scene.gltf')
  
  return (
    <primitive 
      object={scene} 
      scale={[2, 2, 2]} // Ajusta según necesidad
      position={[0, -1, 0]} // Centra en Y si es necesario
      rotation={[0, Math.PI/2, 0]} // Rotación opcional
      
    />

  )
}
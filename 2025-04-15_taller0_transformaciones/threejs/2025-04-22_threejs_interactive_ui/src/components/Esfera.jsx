import { meshStandardMaterial, sphereGeometry } from 'three'

export function Sphere() {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#6be092" 
        roughness={0.2} 
        metalness={0.1}
      />
    </mesh>
  )
}
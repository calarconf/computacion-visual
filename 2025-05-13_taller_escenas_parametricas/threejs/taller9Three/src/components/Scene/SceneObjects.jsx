import { Instances } from '@react-three/drei'
import ObjectInstance from './ObjectInstance'

export const SceneObjects = ({ controls }) => {
  return (
    <Instances>
    <mesh position={[0, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
    </mesh>
      {Array.from({ length: controls.objectCount }).map((_, i) => (
        <ObjectInstance key={i} index={i} controls={controls} />
      ))}
    </Instances>
    
  )
}
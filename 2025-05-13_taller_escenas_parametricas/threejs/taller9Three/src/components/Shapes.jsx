// import { memo } from 'react'

// const Shapes = ({ objects }) => {
//   return objects.map((obj, index) => {
//     // Componente dinámico según el tipo
//     const GeometryComponent = ({ position, color }) => {
//       return (
//         <mesh position={position} castShadow receiveShadow>
//           {obj.type === 'box' ? (
//             <boxGeometry args={obj.size} />
//           ) : (
//             <sphereGeometry args={[obj.radius, 32, 32]} />
//           )}
//           <meshStandardMaterial color={color} />
//         </mesh>
//       )
//     }

//     return <GeometryComponent key={index} {...obj} />
//   })
// }

// // Optimización de rendimiento
// export default memo(Shapes)
import { memo } from 'react'

const Shapes = ({ objects }) => {
  return objects.map((obj, index) => (
    <mesh
      key={index}
      position={obj.position}
      rotation={obj.rotation}
      scale={obj.scale}
      castShadow
      receiveShadow
    >
      {obj.type === 'box' ? (
        <boxGeometry args={obj.geometryArgs} />
      ) : (
        <sphereGeometry args={obj.geometryArgs} />
      )}
      <meshStandardMaterial 
        color={obj.color} 
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  ))
}

export default memo(Shapes)
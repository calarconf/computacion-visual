// src/components/Scene/Lights.jsx
import React from 'react'

export const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="blue" />
    </>
  )
}
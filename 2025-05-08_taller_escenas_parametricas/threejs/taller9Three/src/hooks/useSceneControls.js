import { useControls } from 'leva'

export const useSceneControls = () => {
  return useControls({
    objectCount: { value: 10, min: 1, max: 50 },
    spacing: { value: 2, min: 0.5, max: 5 },
    colorVariation: { value: 0.5, min: 0, max: 1 },
    rotationSpeed: { value: 0.5, min: 0, max: 2 },
    adaptiveScale: true,
    baseColor: '#ff6b6b'
  })
}
import { Scene } from './components/Scene'
import { ControlsPanel } from './components/UI/ControlsPanel'
import { useSceneControls } from './hooks/useSceneControls'
// import ControlsPanel from './components/UI/ControlsPanel' 
import { Leva } from 'leva' 

export default function App() {
  const controls = useSceneControls()
  return (
    <>
      <Leva /> {/* Componente Leva raíz */}
      <Canvas>
        <ControlsPanel />
        <Scene controls={controls} />
      </Canvas>
    </>
  )

}
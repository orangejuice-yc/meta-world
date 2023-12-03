import { useState } from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Canvas from './components/Canvas'
import Overlay from './components/Overlay'

export default function World() {
  const [isAutoRotate, setAutoRotate] = useState(true)
  const [cameraPosition, setCameraPosition] = useState([100, 100, 100]);
  const TogoCameraView = () => {
    setCameraPosition([0, 5, -10])
    setAutoRotate(false)
  }
  return (
    <div className='world-container'>
      <Canvas isAutoRotate={isAutoRotate} cameraPosition={cameraPosition} />
      <Overlay TogoCameraView={TogoCameraView} />
    </div>
  )
}
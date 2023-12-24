import { useState } from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Canvas from './components/Canvas'
import Overlay from './components/Overlay'

export default function World() {
  const [isAutoRotate, setAutoRotate] = useState(true)
  const [cameraPosition, setCameraPosition] = useState([35, 25, 35]);
  const TogoCameraView = (position) => {
    setCameraPosition(position)
    setAutoRotate(false)
  }
  return (
    <div className='world-container'>
      <Canvas isAutoRotate={isAutoRotate} cameraPosition={cameraPosition} TogoCameraView={TogoCameraView}/>
      <Overlay />
    </div>
  )
}
import { useState } from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Canvas from './components/Canvas';
import Overlay from './components/Overlay';

const wholeCameraPosition = [35, 25, 35]
export default function World() {
  const [isAutoRotate, setAutoRotate] = useState(true)
  const [cameraPosition, setCameraPosition] = useState(wholeCameraPosition);
  const [isZoomIn,setZoomIn] = useState(false)

  const TogoCameraView = (position) => {
    setCameraPosition(position)
    setAutoRotate(false)
  }
  return (
    <div className='world-container'>
      <Canvas isAutoRotate={isAutoRotate} cameraPosition={cameraPosition} setAutoRotate={setAutoRotate} TogoCameraView={TogoCameraView} isZoomIn={isZoomIn} SetZoomIn={setZoomIn}/>
      <Overlay setAutoRotate={setAutoRotate} isZoomIn={isZoomIn} SetZoomIn={setZoomIn} TogoCameraView={TogoCameraView} />
    </div>
  )
}
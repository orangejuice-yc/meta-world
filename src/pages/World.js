import { useState,useRef } from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Canvas from './components/Canvas';
import Overlay from './components/Overlay';
import ChatHtml from './components/Chat';

const wholeCameraPosition = [35, 25, 35]
export default function World() {
  const [isAutoRotate, setAutoRotate] = useState(true)
  const [cameraPosition, setCameraPosition] = useState(wholeCameraPosition);
  const [isZoomIn,setZoomIn] = useState(false)
  const cameraFov = useRef(65)

  const [chatShow, setChatShow] = useState(false)

  const TogoCameraView = (position) => {
    setCameraPosition(position)
    setAutoRotate(false)
  }
  return (
    <div className='world-container'>
      <Canvas isAutoRotate={isAutoRotate} cameraFov={cameraFov} cameraPosition={cameraPosition} setAutoRotate={setAutoRotate} TogoCameraView={TogoCameraView} isZoomIn={isZoomIn} SetZoomIn={setZoomIn} chatShow={chatShow} setChatShow={setChatShow}/>
      {!chatShow && <Overlay setAutoRotate={setAutoRotate} cameraFov={cameraFov} isZoomIn={isZoomIn} SetZoomIn={setZoomIn} TogoCameraView={TogoCameraView} />}
      {isZoomIn && chatShow && <ChatHtml chatShow={chatShow} setChatShow={setChatShow} />}
    </div>
  )
}
import { useState,useRef } from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Canvas from './components/Canvas';
import Overlay from './components/Overlay';
import ChatHtml from './components/ChatHobby';

import ChatHtml1 from './components/ChatHobby';
import ChatHtml2 from './components/ChatCulture';
import ChatHtml3 from './components/ChatForum';
import ChatHtml4 from './components/ChatTrade';
import ChatHtml5 from './components/ChatTreehole';
import ChatHtml6 from './components/ChatCareer';

const wholeCameraPosition = [35, 25, 35]

export default function World() {
  const [isAutoRotate, setAutoRotate] = useState(true)
  const [cameraPosition, setCameraPosition] = useState(wholeCameraPosition);
  const [isZoomIn,setZoomIn] = useState(false)
  const cameraFov = useRef(65)

  const [chatShow, setChatShow] = useState(false)
  const [num, setNum] = useState(0);
  
  const chatHtmlList = [
    <ChatHtml1 chatShow={chatShow} setChatShow={setChatShow} />,
    <ChatHtml2 chatShow={chatShow} setChatShow={setChatShow} />,
    <ChatHtml3 chatShow={chatShow} setChatShow={setChatShow} />,
    <ChatHtml4 chatShow={chatShow} setChatShow={setChatShow} />,
    <ChatHtml5 chatShow={chatShow} setChatShow={setChatShow} />,
    <ChatHtml6 chatShow={chatShow} setChatShow={setChatShow} />
  ];
  const TogoCameraView = (position) => {
    setCameraPosition(position)
    setAutoRotate(false)
  }
  return (
    <div className='world-container'>
      <Canvas isAutoRotate={isAutoRotate} cameraFov={cameraFov} cameraPosition={cameraPosition} setAutoRotate={setAutoRotate} TogoCameraView={TogoCameraView} isZoomIn={isZoomIn} SetZoomIn={setZoomIn} chatShow={chatShow} setChatShow={setChatShow} setNum={setNum}/>
      <Overlay setAutoRotate={setAutoRotate} cameraFov={cameraFov} isZoomIn={isZoomIn} SetZoomIn={setZoomIn} TogoCameraView={TogoCameraView} chatShow={chatShow} />
      {isZoomIn && chatShow && chatHtmlList[num]}
    </div>
  )
}
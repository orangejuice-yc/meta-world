import { useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three';
import { OrbitControls, PerspectiveCamera,Fisheye } from '@react-three/drei'
import Model from './Model'
import Env from './Env'


export default function CanvasMap({isAutoRotate,cameraFov,cameraPosition,setAutoRotate,TogoCameraView,isZoomIn,SetZoomIn,chatShow,setChatShow,setNum}) {
  const cameraControll = useRef()
  const cameraRef = useRef()
  
  return (
      <Canvas style={{ width: '100vw', height: '100vh' }}>
        {/* <Fisheye zoom={0.4}> */}
        <PerspectiveCamera
          // up={[0,1,0]}
          ref={cameraRef}
          makeDefault // 使摄像头成为默认相机
          position={cameraPosition}  // 设置摄像头位置
          fov={cameraFov.current}  // 设置视野范围
          near={0.1}  // 设置近裁剪面
          far={100}  // 设置远裁剪面
        />
        {/* <axesHelper args={[500]} /> */}
        {/* some blue : #6da2dd,#65c2ef #78cef9 */}
        <color attach="background" args={['#64a1dd']} /> 
        
        <Model setNum={setNum} TogoCameraView={TogoCameraView} cameraFov={cameraFov} cameraRef={cameraRef} cameraControll={cameraControll} setAutoRotate={setAutoRotate} isZoomIn={isZoomIn} SetZoomIn={SetZoomIn} chatShow={chatShow} setChatShow={setChatShow} />
        <Env />
        
        <OrbitControls
          ref={cameraControll}
          // target={[0,0,0]}
          autoRotate={isAutoRotate}
          autoRotateSpeed={1}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={isZoomIn ? Math.PI / 2 : Math.PI / 4.2}
          maxPolarAngle={isZoomIn ? Math.PI / 2 : Math.PI / 2.2}
        />

        {/* </Fisheye> */}
      </Canvas>
  )
}
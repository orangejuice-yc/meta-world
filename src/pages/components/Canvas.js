import { useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Model from './Model'
import Env from './Env'


export default function CanvasMap({isAutoRotate,cameraPosition,TogoCameraView,isZoomIn,SetZoomIn}) {
  return (
      <Canvas style={{ width: '100vw', height: '100vh' }}>
        {/* some blue : #6da2dd,#65c2ef #78cef9 */}
        <color attach="background" args={['#64a1dd']} /> 
        <Model TogoCameraView={TogoCameraView} isZoomIn={isZoomIn} SetZoomIn={SetZoomIn}/>
        <Env />
        
        <OrbitControls
          target={(0,0,0)}
          autoRotate={isAutoRotate}
          autoRotateSpeed={1}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 4.2}
          maxPolarAngle={Math.PI / 2.2}
        />
        <PerspectiveCamera
          makeDefault  // 使摄像头成为默认相机
          position={cameraPosition}  // 设置摄像头位置
          rotation={[0,0,0]}
          fov={55}  // 设置视野范围
          near={0.1}  // 设置近裁剪面
          far={100}  // 设置远裁剪面
        />
        <axesHelper args={[500]} />
      </Canvas>
  )
}
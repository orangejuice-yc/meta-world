import { useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Model from './Model'
import Env from './Env'


export default function CanvasMap({isAutoRotate,cameraPosition}) {
  return (
      <Canvas style={{ width: '100vw', height: '100vh' }}>
        {/* some blue : #6da2dd,#65c2ef */}
        <color attach="background" args={['#78cef9']} /> 
        <Model />
        <Env />
        <OrbitControls
          autoRotate={isAutoRotate}
          autoRotateSpeed={1}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 4.2}
          maxPolarAngle={Math.PI / 2.2}
        />
        <axesHelper args={[500]} />
        <PerspectiveCamera
          makeDefault  // 使摄像头成为默认相机
          position={cameraPosition}  // 设置摄像头位置
          fov={75}  // 设置视野范围
          near={0.1}  // 设置近裁剪面
          far={1000}  // 设置远裁剪面
        />
      </Canvas>
  )
}
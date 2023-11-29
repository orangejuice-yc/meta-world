import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

import Model from './components/Model'
import Env from './components/Env'
import Overlay from './components/Overlay'

export default function World() {
  const [isAutoRotate, setAutoRotate] = useState(true)
  const [cameraPosition, setCameraPosition] = useState([100, 100, 100]);
  const TogoCameraView = () => {
    console.log(11111)
    setCameraPosition([10, 10, 10])
    setAutoRotate(false)
  }
  return (
    <div className='world-container'>
      <Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position: [500, 500, 500], fov: 55, near: 0.1 }}>
        <Model />
        <Env />
        <OrbitControls
          autoRotate={isAutoRotate}
          autoRotateSpeed={2}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 4}
        />
        <axesHelper args={[100]} />
        <PerspectiveCamera
          makeDefault  // 使摄像头成为默认相机
          position={cameraPosition}  // 设置摄像头位置
          fov={75}  // 设置视野范围
          near={0.1}  // 设置近裁剪面
          far={1000}  // 设置远裁剪面
        />
      </Canvas>
      <Overlay TogoCameraView={TogoCameraView} />
    </div>
  )
}
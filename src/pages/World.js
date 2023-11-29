import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Model from './components/Model'
import Env from './components/Env'
import Overlay from './components/Overlay'

export default function World() {
  return (
    <div className='world-canvas'>
      <Canvas style={{width:'100vw',height:'100vh'}} camera={{ position: [100, 100, 100], fov: 25 }}>
        <Suspense fallback={null}>
          <Model />
          <Env />
        </Suspense>
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
      </Canvas>
      <Overlay />
    </div>
  )
}
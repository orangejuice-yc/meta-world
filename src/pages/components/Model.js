import React, { useRef, useState } from "react";
import { useFrame } from '@react-three/fiber'
import { Gltf, Environment, Fisheye, PerspectiveCamera, KeyboardControls, CameraControls, OrbitControls,Html } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
// import Controller from 'ecctrl'
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { directive } from "@babel/types";
import * as THREE from 'three';

export default function Model(props) {
  // const CameraRef = useRef();
  // useFrame(() => {
  //   // CameraRef.current.position.x += 0.003;
  //   // CameraRef.current.position.z += 0.003;
  // });
  const [hovered1, setHover1] = useState(false)
  const [hovered2, setHover2] = useState(false)
  const [hovered3, setHover3] = useState(false)
  const [hovered4, setHover4] = useState(false)
  const [hovered5, setHover5] = useState(false)
  const [hovered6, setHover6] = useState(false)

  const [hovered7, setHover7] = useState(false)
  const [hovered8, setHover8] = useState(false)
  const [hovered9, setHover9] = useState(false)
  const [hovered10, setHover10] = useState(false)
  const [hovered11, setHover11] = useState(false)
  const [hovered12, setHover12] = useState(false)

  const keyboardMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
    { name: 'jump', keys: ['Space'] },
    { name: 'run', keys: ['Shift'] },
  ]
  const characterRef = useRef();
  const [previousPosition, setPreviousPosition] = useState({ x: 0, y: 0, z: 0 });

  const meshRef1 = useRef();
  const meshRef2 = useRef();
  const meshRef3 = useRef();
  const meshRef4 = useRef();
  const meshRef5 = useRef();
  const meshRef6 = useRef();
  useFrame(({ camera }) => {
    if (characterRef.current) {
      const { x, y, z } = characterRef.current.position;
      // 检查当前位置和之前的位置是否相同
      if (x !== previousPosition.x || y !== previousPosition.y || z !== previousPosition.z) {
        // 位置已更新，执行操作并更新前一帧位置
        console.log('对象的位置信息:', { x, y, z });
        setPreviousPosition({ x, y, z });
      }
    }


      // 获取摄像头位置
      const cameraPosition = camera.position;
      // 将元素朝向摄像头
      meshRef6.current.lookAt(cameraPosition);
      meshRef6.current.rotateY(- Math.PI / 2)
      meshRef6.current.rotateZ(0)
      meshRef6.current.rotateX(0)

      meshRef5.current.lookAt(cameraPosition);
      meshRef5.current.rotateY(- Math.PI / 2)
      meshRef5.current.rotateZ(0)
      meshRef5.current.rotateX(0)

      meshRef4.current.lookAt(cameraPosition);
      meshRef4.current.rotateY(- Math.PI / 2)
      meshRef4.current.rotateZ(0)
      meshRef4.current.rotateX(0)

      meshRef3.current.lookAt(cameraPosition);
      meshRef3.current.rotateY(- Math.PI / 2)
      meshRef3.current.rotateZ(0)
      meshRef3.current.rotateX(0)

      meshRef2.current.lookAt(cameraPosition);
      meshRef2.current.rotateY(- Math.PI / 2)
      meshRef2.current.rotateZ(0)
      meshRef2.current.rotateX(0)

      meshRef1.current.lookAt(cameraPosition);
      meshRef1.current.rotateY(- Math.PI / 2)
      meshRef1.current.rotateZ(0)
      meshRef1.current.rotateX(0)
    
  });

  const clickMeshRef1 = () => {
    console.log(meshRef1.current.position)
    props.TogoCameraView([meshRef1.current.position.x,2,meshRef1.current.position.z-10])
  }
  // const Annotation = ({ children, ...props }) => {
  //   return (
  //     <Html
  //       {...props}
  //       transform
  //       occlude="blending"
  //     >
  //       <div className="annotation" onClick={() => console.log('.')}>
  //         {children}
  //       </div>
  //     </Html>
  //   )
  // }
  return (
    <>
      {/* <CameraControls minPolarAngle={1} maxPolarAngle={Math.PI / 1.6} /> */}
      <ambientLight intensity={Math.PI / 2} />
      <Physics timeStep="vary">
        {/* <KeyboardControls map={keyboardMap}>
          <Ecctrl maxVelLimit={5} jumpVel={4}>
            <Gltf ref={characterRef} castShadow receiveShadow scale={1} position={[0, 0.5, 0]} src="/glb/shiba.glb" />
          </Ecctrl>
        </KeyboardControls> */}
        <RigidBody type="fixed" colliders="trimesh">
          <Gltf castShadow receiveShadow position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1} src="/glb/land.glb" />
        </RigidBody>
      </Physics>
      {/* 紫 */}
      <mesh>
        <Gltf  onPointerOver={(event) => { setHover1(true) }}
          onPointerOut={(event) => setHover1(false)} position={[-1, 3, 3.8]} rotation={[0, -89.8, 0]} scale={0.3} src={hovered1 ? "/glb/bubble_hover.glb" : "/glb/bubble_normal.glb"} />
      </mesh>
      {/* 白 */}
      <mesh>
        <Gltf  onPointerOver={(event) => { setHover2(true) }}
          onPointerOut={(event) => setHover2(false)} position={[-8.8, 3, -15]} rotation={[0, 89.5, 0]} scale={0.3} src={hovered2 ? "/glb/bubble_hover.glb" : "/glb/bubble_normal.glb"} />
      </mesh>
      {/* 粉 */}
      <mesh>
        <Gltf  onPointerOver={(event) => { setHover3(true) }}
          onPointerOut={(event) => setHover3(false)} position={[-34, 3, 4.8]} rotation={[0, 179.5, 0]} scale={0.3} src={hovered3 ? "/glb/bubble_hover.glb" : "/glb/bubble_normal.glb"} />
      </mesh>
      {/* 蓝 */}
      <mesh>
        <Gltf  onPointerOver={(event) => { setHover4(true) }}
          onPointerOut={(event) => setHover4(false)} position={[18.5, 3, 7]} rotation={[0, -90, 0]} scale={0.3} src={hovered4 ? "/glb/bubble_hover.glb" : "/glb/bubble_normal.glb"} />
      </mesh>
      {/* 红 */}
      <mesh>
        <Gltf  onPointerOver={(event) => { setHover5(true) }}
          onPointerOut={(event) => setHover5(false)} position={[16.5, 3, -15]} rotation={[0, 90, 0]} scale={0.3} src={hovered5 ? "/glb/bubble_hover.glb" : "/glb/bubble_normal.glb"} />
      </mesh>
      {/* 橙 */}
      <mesh>
        <Gltf  onPointerOver={(event) => { setHover6(true) }}
          onPointerOut={(event) => setHover6(false)} position={[47.5, 3, -6.8]} rotation={[0, 44.7, 0]} scale={0.3} src={hovered6 ? "/glb/bubble_hover.glb" : "/glb/bubble_normal.glb"} />
      </mesh>


      
      <mesh>
         {/* 企业文化展示 */}
         <Gltf ref={meshRef1} onPointerOver={(event) => { setHover7(true) }}
          onPointerOut={(event) => setHover7(false)} 
          onClick={clickMeshRef1}
          position={[-1, 5, 3.8]} scale={hovered7 ? 2 : 1.5}  src={hovered7 ? "/glb/title/culturegrey.glb" : "/glb/title/culture.glb"} />
         {/* 企业文化展示 */}
         <Gltf ref={meshRef2} onPointerOver={(event) => { setHover8(true) }}
          onPointerOut={(event) => setHover8(false)} position={[-8.8, 5, -15]} scale={hovered8 ? 2 : 1.5}  src={hovered8 ? "/glb/title/culturegrey.glb" : "/glb/title/culture.glb"} />
         {/* 企业文化展示 */}
         <Gltf ref={meshRef3} onPointerOver={(event) => { setHover9(true) }}
          onPointerOut={(event) => setHover9(false)} position={[-34, 5, 4.8]} scale={hovered9 ? 2 : 1.5}  src={hovered9 ? "/glb/title/culturegrey.glb" : "/glb/title/culture.glb"} />
         {/* 企业文化展示 */}
         <Gltf ref={meshRef4} onPointerOver={(event) => { setHover10(true) }}
          onPointerOut={(event) => setHover10(false)} position={[18.5, 5, 7]} scale={hovered10 ? 2 : 1.5}  src={hovered10 ? "/glb/title/culturegrey.glb" : "/glb/title/culture.glb"} />
        {/* 企业文化展示 */}
        <Gltf ref={meshRef5} onPointerOver={(event) => { setHover11(true) }}
          onPointerOut={(event) => setHover11(false)} position={[16.5, 5, -15]} scale={hovered11 ? 2 : 1.5}  src={hovered11 ? "/glb/title/culturegrey.glb" : "/glb/title/culture.glb"} />
        {/* 企业文化展示 */}
        <Gltf ref={meshRef6} onPointerOver={(event) => { setHover12(true) }}
          onPointerOut={(event) => setHover12(false)} position={[47.5, 5, -6.8]} scale={hovered12 ? 2 : 1.5}  src={hovered12 ? "/glb/title/culturegrey.glb" : "/glb/title/culture.glb"} />
      </mesh>
      {/* <Annotation position={[20, 20, 20]}>
        <span style={{ fontSize: '15em' }}>🌕</span> Aglaia
      </Annotation> */}
    </>
  )
}
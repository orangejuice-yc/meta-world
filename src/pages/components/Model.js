import React, { useRef, useState } from "react";
import { useFrame } from '@react-three/fiber'
import { Gltf, Environment, Fisheye, PerspectiveCamera, KeyboardControls, CameraControls, OrbitControls,Html } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
// import Controller from 'ecctrl'
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { directive } from "@babel/types";
import * as THREE from 'three';
function Annotation({ children, ...props }) {
  return (
    <Html
      {...props}
      transform
      occlude="blending"
    >
      <div className="annotation" onClick={() => console.log('.')}>
        {children}
      </div>
    </Html>
  )
}

export default function Model(props) {
  // const CameraRef = useRef();
  // useFrame(() => {
  //   // CameraRef.current.position.x += 0.003;
  //   // CameraRef.current.position.z += 0.003;
  // });
  const [hovered, setHover] = useState(false)

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

  const meshRef = useRef();
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
    // if (meshRef.current) {
    //   // 获取摄像头位置
    //   const cameraPosition = camera.position;
    //   // 将元素朝向摄像头
    //   meshRef.current.lookAt(cameraPosition);
    // }
  });
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
      <mesh ref={meshRef}>
        <Gltf  onPointerOver={(event) => { setHover(true) }}
          onPointerOut={(event) => setHover(false)} position={[-1, 3, 3.8]} rotation={[0, -89.8, 0]} scale={0.3} src={hovered ? "/glb/bubble_hover.glb" : "/glb/bubble_normal.glb"} />
      </mesh>
      {/* 白 */}
      <mesh ref={meshRef}>
        <Gltf  onPointerOver={(event) => { setHover(true) }}
          onPointerOut={(event) => setHover(false)} position={[-8.8, 3, -15]} rotation={[0, 89.5, 0]} scale={0.3} src={hovered ? "/glb/bubble_hover.glb" : "/glb/bubble_normal.glb"} />
      </mesh>
      {/* 粉 */}
      <mesh ref={meshRef}>
        <Gltf  onPointerOver={(event) => { setHover(true) }}
          onPointerOut={(event) => setHover(false)} position={[-34, 3, 4.8]} rotation={[0, 179.5, 0]} scale={0.3} src={hovered ? "/glb/bubble_hover.glb" : "/glb/bubble_normal.glb"} />
      </mesh>
      {/* 蓝 */}
      <mesh ref={meshRef}>
        <Gltf  onPointerOver={(event) => { setHover(true) }}
          onPointerOut={(event) => setHover(false)} position={[18.5, 3, 7]} rotation={[0, -90, 0]} scale={0.3} src={hovered ? "/glb/bubble_hover.glb" : "/glb/bubble_normal.glb"} />
      </mesh>
      {/* 红 */}
      <mesh ref={meshRef}>
        <Gltf  onPointerOver={(event) => { setHover(true) }}
          onPointerOut={(event) => setHover(false)} position={[16.5, 3, -15]} rotation={[0, 90, 0]} scale={0.3} src={hovered ? "/glb/bubble_hover.glb" : "/glb/bubble_normal.glb"} />
      </mesh>
      {/* 橙 */}
      <mesh ref={meshRef}>
        <Gltf  onPointerOver={(event) => { setHover(true) }}
          onPointerOut={(event) => setHover(false)} position={[47.5, 3, -6.8]} rotation={[0, 44.7, 0]} scale={0.3} src={hovered ? "/glb/bubble_hover.glb" : "/glb/bubble_normal.glb"} />
      </mesh>
      {/* <Annotation position={[20, 20, 20]}>
        <span style={{ fontSize: '1.5em' }}>🌕</span> Aglaia
      </Annotation> */}
    </>
  )
}
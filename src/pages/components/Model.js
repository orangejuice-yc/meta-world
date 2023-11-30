import React, { useRef, useState } from "react";
import { useFrame } from '@react-three/fiber'
import { Gltf, Environment, Fisheye, PerspectiveCamera, KeyboardControls, CameraControls, OrbitControls } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
import Controller from 'ecctrl'
import { directive } from "@babel/types";


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

  useFrame(() => {
    if (characterRef.current) {
      const { x, y, z } = characterRef.current.position;
      // 检查当前位置和之前的位置是否相同
      if (x !== previousPosition.x || y !== previousPosition.y || z !== previousPosition.z) {
        // 位置已更新，执行操作并更新前一帧位置
        console.log('对象的位置信息:', { x, y, z });
        setPreviousPosition({ x, y, z });
      }
    }
  });

  return (
    <>
      {/* <CameraControls minPolarAngle={1} maxPolarAngle={Math.PI / 1.6} /> */}
      <ambientLight intensity={Math.PI / 2} />
      <Physics timeStep="vary">
        <KeyboardControls map={keyboardMap}>
          <Controller maxVelLimit={5}>
            <Gltf ref={characterRef} castShadow receiveShadow scale={10} position={[0, 10, 0]} src="/glb/shiba.glb" />
          </Controller>
        </KeyboardControls>
        <RigidBody type="fixed" colliders="trimesh">
          <Gltf castShadow receiveShadow position={[0, 0, 0]} rotation={[0, 0, 0]} scale={4} src="/glb/land.glb" />
        </RigidBody>
      </Physics>
      <mesh>
        <Gltf onPointerOver={(event) => { console.log(111111); setHover(true) }}
          onPointerOut={(event) => setHover(false)} position={[10, 10, 10]} rotation={[0, 0, 0]} scale={10} src={hovered ? "/glb/bubble_hover.glb" : "/glb/bubble_normal.glb"} />
      </mesh>
    </>
  )
}
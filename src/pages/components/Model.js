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
  const keyboardMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
    { name: 'jump', keys: ['Space'] },
    { name: 'run', keys: ['Shift'] },
  ]
  return (
    <mesh
    // ref={ref}
    >
      {/* <CameraControls minPolarAngle={1} maxPolarAngle={Math.PI / 1.6} /> */}
      <ambientLight intensity={Math.PI / 2} />
      <Physics timeStep="vary">
        <KeyboardControls map={keyboardMap}>
          <Controller maxVelLimit={5}>
            <Gltf castShadow receiveShadow scale={1} position={[0, 0, 0]} src="/shiba.glb" />
          </Controller>
        </KeyboardControls>
        <RigidBody type="fixed" colliders="trimesh">
          <Gltf castShadow receiveShadow position={[0, 0, 0]} rotation={[0, 0, 0]} scale={10} src="/world.glb" />
        </RigidBody>
      </Physics>
    </mesh>
  )
}
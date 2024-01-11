import { useState, useTransition } from "react";
import { useControls } from "leva";
import { Environment, Sky, Clouds, Cloud } from '@react-three/drei';
import * as THREE from 'three';
import { memo } from 'react'
import { AccumulativeShadows, RandomizedLight, Environment as EnvironmentImpl } from '@react-three/drei'
export default function Env({ direction = [5, 5, 5] }) {

  return (
    <>
      {/* <Clouds material={THREE.MeshBasicMaterial}>
        <Cloud seed={10} bounds={30} volume={60} position={[30, 30, -60]} />
        <Cloud seed={10} bounds={30} volume={60} position={[-30, 30, 60]} />
      </Clouds> */}
      <Environment preset="city" />
      {/* <Sky /> */}
    </>
  );
}
import { useState, useTransition } from "react";
import { useControls } from "leva";
import { Environment, Sky, Clouds, Cloud } from '@react-three/drei';
import * as THREE from 'three';
import { memo } from 'react'
import { AccumulativeShadows, RandomizedLight, Environment as EnvironmentImpl } from '@react-three/drei'
export default function Env({ direction = [5, 5, 5] }) {

  return (
    <>
      <Clouds material={THREE.MeshBasicMaterial}>
        <Cloud seed={10} bounds={30} volume={80} position={[60, 100, -130]} />
        <Cloud seed={10} bounds={30} volume={80} position={[-60, 100, 130]} />
      </Clouds>
      <Environment preset="city" />
      {/* <Sky /> */}
    </>
  );
}
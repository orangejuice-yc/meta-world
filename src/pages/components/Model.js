import React, { useRef, useState } from "react";
import { useFrame } from '@react-three/fiber'
import { Gltf, Environment, Fisheye, PerspectiveCamera, KeyboardControls, CameraControls, OrbitControls, Html } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
import Controller from 'ecctrl'
import { directive } from "@babel/types";
import * as THREE from 'three';
import ChatHtml from './Chat'


export default function Model(props) {

  const keyboardMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
    { name: 'jump', keys: ['Space'] },
    { name: 'run', keys: ['Shift'] },
  ]

  const titleRef1 = useRef();
  const titleRef2 = useRef();
  const titleRef3 = useRef();
  const titleRef4 = useRef();
  const titleRef5 = useRef();
  const titleRef6 = useRef();

  const [titleHovered1, setTitleHover1] = useState(false)
  const [titleHovered2, setTitleHover2] = useState(false)
  const [titleHovered3, setTitleHover3] = useState(false)
  const [titleHovered4, setTitleHover4] = useState(false)
  const [titleHovered5, setTitleHover5] = useState(false)
  const [titleHovered6, setTitleHover6] = useState(false)


  const bubbleRef1 = useRef();
  const bubbleRef2 = useRef();
  const bubbleRef3 = useRef();
  const bubbleRef4 = useRef();
  const bubbleRef5 = useRef();
  const bubbleRef6 = useRef();

  const [bubbleHovered1, setBubbleHover1] = useState(false)
  const [bubbleHovered2, setBubbleHover2] = useState(false)
  const [bubbleHovered3, setBubbleHover3] = useState(false)
  const [bubbleHovered4, setBubbleHover4] = useState(false)
  const [bubbleHovered5, setBubbleHover5] = useState(false)
  const [bubbleHovered6, setBubbleHover6] = useState(false)

  const robotRef1 = useRef();
  const robotRef2 = useRef();
  const robotRef3 = useRef();
  const robotRef4 = useRef();
  const robotRef5 = useRef();
  const robotRef6 = useRef();

  const npcRefList = [
    {
      title: '紫色机器人',
      bubbleRef: bubbleRef1,
      robotRef: robotRef1,
      bubblePosition: [-1, 3, 3.8],
      bubbleRotation: [0, Math.PI, 0],
      robotPosition: [-1, 2, 3.8],
      robotRotation: [0, Math.PI, 0],
      defaultGlb: '/glb/bubble_normal.glb',
      hoverdGlb: '/glb/bubble_hover.glb',
      hoverd: bubbleHovered1,
      setHover: setBubbleHover1,
      robotGlb:'/glb/robot/Alronald-purple.glb'
    },
    {
      title: '黄色机器人',
      bubbleRef: bubbleRef2,
      robotRef: robotRef2,
      bubblePosition: [-8.8, 3, -15],
      bubbleRotation: [0, Math.PI / 2, 0],
      robotPosition: [-8.8, 2, -15],
      robotRotation: [0, Math.PI / 2, 0],
      defaultGlb: '/glb/bubble_normal.glb',
      hoverdGlb: '/glb/bubble_hover.glb',
      hoverd: bubbleHovered2,
      setHover: setBubbleHover2,
      robotGlb:'/glb/robot/Alronald-yellow.glb'
    },
    {
      title: '粉色机器人',
      bubbleRef: bubbleRef3,
      robotRef: robotRef3,
      bubblePosition: [-34, 3, 4.8],
      bubbleRotation: [0, Math.PI, 0],
      robotPosition: [-34, 2, 4.8],
      robotRotation: [0, Math.PI, 0],
      defaultGlb: '/glb/bubble_normal.glb',
      hoverdGlb: '/glb/bubble_hover.glb',
      hoverd: bubbleHovered3,
      setHover: setBubbleHover3,
      robotGlb:'/glb/robot/Alronald-pink.glb'
    },
    {
      title: '蓝色机器人',
      bubbleRef: bubbleRef4,
      robotRef: robotRef4,
      bubblePosition: [18.5, 3, 7],
      bubbleRotation: [0, -Math.PI, 0],
      robotPosition: [18.5, 2, 7],
      robotRotation: [0, -Math.PI, 0],
      defaultGlb: '/glb/bubble_normal.glb',
      hoverdGlb: '/glb/bubble_hover.glb',
      hoverd: bubbleHovered4,
      setHover: setBubbleHover4,
      robotGlb:'/glb/robot/Alronald-blue.glb'
    },
    {
      title: '灰色机器人',
      bubbleRef: bubbleRef5,
      robotRef: robotRef5,
      bubblePosition: [16.5, 3, -15],
      bubbleRotation: [0, Math.PI, 0],
      robotPosition: [16.5, 2, -15],
      robotRotation: [0, Math.PI, 0],
      defaultGlb: '/glb/bubble_normal.glb',
      hoverdGlb: '/glb/bubble_hover.glb',
      hoverd: bubbleHovered5,
      setHover: setBubbleHover5,
      robotGlb:'/glb/robot/Alronald-grey.glb'
    },
    {
      title: '橙色机器人',
      bubbleRef: bubbleRef6,
      robotRef: robotRef6,
      bubblePosition: [47.5, 3, -6.8],
      bubbleRotation: [0, Math.PI / 2, 0],
      robotPosition: [47.5, 2, -6.8],
      robotRotation: [0, Math.PI / 2, 0],
      defaultGlb: '/glb/bubble_normal.glb',
      hoverdGlb: '/glb/bubble_hover.glb',
      hoverd: bubbleHovered6,
      setHover: setBubbleHover6,
      robotGlb:'/glb/robot/Alronald-orange.glb'
    },
  ];

  const TextPlaqueList = [
    {
      title: '论坛与社团',
      engTitle: 'DISCUSSION BOARD & CLUB',
      ref: titleRef1,
      position: [-10, 9, 5.8],
      cameraPosition:[-1,3.5,0],
      tomatoPosition:[-1,0,-1],
      defaultGlb: '/glb/title/DiscussionBoard&ClubDefault.glb',
      hoverdGlb: '/glb/title/DiscussionBoard&ClubHoverd.glb',
      hoverd: titleHovered1,
      setHover: setTitleHover1
    },
    {
      title: '企业文化展示',
      engTitle: 'CULTURE SHOWCASE',
      ref: titleRef2,
      position: [-17.8, 9, -15],
      defaultGlb: '/glb/title/CultureShowcaseDefault.glb',
      hoverdGlb: '/glb/title/CultureShowcaseHoverd.glb',
      hoverd: titleHovered2,
      setHover: setTitleHover2
    },
    {
      title: '企业图书馆',
      engTitle: 'CORPORATE LIBRARY',
      ref: titleRef3,
      position: [-42, 9, -2],
      defaultGlb: '/glb/title/CorporateLibraryDefault.glb',
      hoverdGlb: '/glb/title/CorporateLibraryHoverd.glb',
      hoverd: titleHovered3,
      setHover: setTitleHover3
    },
    {
      title: '信息发布',
      engTitle: 'INFORMATION RELEASE',
      ref: titleRef4,
      position: [26.5, 9, 11],
      defaultGlb: '/glb/title/InformationReleaseDefault.glb',
      hoverdGlb: '/glb/title/InformationReleaseHoverd.glb',
      hoverd: titleHovered4,
      setHover: setTitleHover4
    },
    {
      title: '职业管理与提升',
      engTitle: 'CAREER ADVANCEMENT',
      ref: titleRef5,
      position: [16.5, 9, -15],
      defaultGlb: '/glb/title/CareerAdvancedDefault.glb',
      hoverdGlb: '/glb/title/CareerAdvancedHoverd.glb',
      hoverd: titleHovered5,
      setHover: setTitleHover5
    },
    {
      title: '健康管理',
      engTitle: 'HEALTH CARE',
      ref: titleRef6,
      position: [60.5, 9, -5.8],
      defaultGlb: '/glb/title/HealthCareDefault.glb',
      hoverdGlb: '/glb/title/HealthCareHoverd.glb',
      hoverd: titleHovered6,
      setHover: setTitleHover6
    }
  ]


  const characterRef = useRef();
  const [previousPosition, setPreviousPosition] = useState({ x: 0, y: 0, z: 0 });
  const [chatShow, setChatShow] = useState(false)
  const [textPlaqueList, setTextPlaqueList] = useState(TextPlaqueList);
  const [tomatoPosition,setTomatoPosition] = useState([0,0,0])

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

    if (!props.isZoomIn) {
      // 获取摄像头位置
      const cameraPosition = camera.position;
      // 将元素朝向摄像头
      titleRef6?.current?.lookAt(cameraPosition);
      titleRef6?.current?.rotateZ(0)
      titleRef6?.current?.rotateX(0)

      titleRef5?.current?.lookAt(cameraPosition);
      titleRef5?.current?.rotateZ(0)
      titleRef5?.current?.rotateX(0)

      titleRef4?.current?.lookAt(cameraPosition);
      titleRef4?.current?.rotateZ(0)
      titleRef4?.current?.rotateX(0)

      titleRef3?.current?.lookAt(cameraPosition);
      titleRef3?.current?.rotateZ(0)
      titleRef3?.current?.rotateX(0)

      titleRef2?.current?.lookAt(cameraPosition);
      titleRef2?.current?.rotateZ(0)
      titleRef2?.current?.rotateX(0)

      titleRef1?.current?.lookAt(cameraPosition);
      titleRef1?.current?.rotateZ(0)
      titleRef1?.current?.rotateX(0)
    }


  });

  const clickTitleRef = (item) => {
    props.SetZoomIn(true)
    props.setAutoRotate(false)
    props.TogoCameraView(item.cameraPosition)
    setTomatoPosition(item.tomatoPosition)
    // robotRef1?.current?.rotateY(- Math.PI / 2)
    // robotRef1?.current?.rotateZ(0)
    // robotRef1?.current?.rotateX(0)
  }

  const startChat = () => {
    console.log('startchat', bubbleRef1)
    props.TogoCameraView([5.5, 2.5, -1])
    setChatShow(true)
  }

  return (
    <>
      {/* <CameraControls minPolarAngle={1} maxPolarAngle={Math.PI / 1.6} /> */}
      <ambientLight intensity={Math.PI / 2} />
      <Physics  timeStep="vary">
        {props?.isZoomIn && <KeyboardControls map={keyboardMap}>
          <Controller  maxVelLimit={5}>
            <Gltf ref={characterRef} castShadow receiveShadow scale={0.2} rotation={[0, 0, 0]} position={tomatoPosition} src="/glb/tomato.glb" />
          </Controller>
        </KeyboardControls>}
        <RigidBody type="fixed" colliders="trimesh">
          <Gltf castShadow receiveShadow position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1} src={"/glb/land.glb"} />
        </RigidBody>
      </Physics>

      {/* 小奥及头顶气泡 */}
      {props?.isZoomIn &&
        <mesh>
          {
            npcRefList?.map((item, index) => 
              <mesh key={index}>
                <Gltf
                  ref={item.bubbleRef}
                  onPointerOver={(event) => { item.setHover(true) }}
                  onPointerOut={(event) => item.setHover(false)}
                  onClick={startChat}
                  position={item.bubblePosition} rotation={item.bubbleRotation} scale={0.3} src={item.hoverd ? item.hoverdGlb : item.defaultGlb} />
                <Gltf
                  ref={item.robotRef}
                  position={item.robotPosition} rotation={item.robotRotation} scale={0.8} src={item.robotGlb} />
              </mesh>
            )
          }
        </mesh>}

      {props.isZoomIn && <ChatHtml chatShow={chatShow} />}

      {/* 文字牌 */}
      {!props.isZoomIn && <mesh>
        {TextPlaqueList?.map((item, index) =>
          <Gltf
            key={index}
            ref={item.ref}
            onPointerOver={(event) => item.setHover(true)}
            onPointerOut={(event) => item.setHover(false)}
            onClick={() => clickTitleRef(item)}
            position={item.position}
            scale={item?.hoverd ? 2.5 : 2}
            src={item?.hoverd ? item?.hoverdGlb : item?.defaultGlb}
          />
        )}
      </mesh>}
    </>
  )
}
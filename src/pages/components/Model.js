import React, { useRef, useState } from "react";
import { useFrame } from '@react-three/fiber'
import { Gltf, Environment, Fisheye, PerspectiveCamera, KeyboardControls, CameraControls, OrbitControls, Html } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
import Controller from 'ecctrl'
import { directive } from "@babel/types";
import * as THREE from 'three';



export default function Model(props) {

  const keyboardMap = [
    // { name: 'forward', keys: ['ArrowUp'] },
    // { name: 'backward', keys: ['ArrowDown'] },
    // { name: 'leftward', keys: ['ArrowLeft'] },
    // { name: 'rightward', keys: ['ArrowRight'] },
    // { name: 'jump', keys: ['Space'] },
    // { name: 'run', keys: ['Shift'] },
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
      bubblePosition: [-1, 3, 5],
      bubbleRotation: [0, Math.PI, 0],
      robotPosition: [-1, 2, 5],
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
      bubblePosition: [-13, 3, -5],
      bubbleRotation: [0, 0.3, 0],
      robotPosition: [-13, 2, -5],
      robotRotation: [0, 0.3, 0],
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
      bubblePosition: [-34, 3, 1],
      bubbleRotation: [0, Math.PI/2, 0],
      robotPosition: [-34, 2, 1],
      robotRotation: [0, Math.PI/2, 0],
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
      bubblePosition: [12, 3, 8],
      bubbleRotation: [0, -Math.PI, 0],
      robotPosition: [12, 2, 8],
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
      bubblePosition: [23, 3, -5],
      bubbleRotation: [0, -Math.PI/3, 0],
      robotPosition: [23, 2, -5],
      robotRotation: [0, -Math.PI/3, 0],
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
      bubblePosition: [47, 3, -2],
      bubbleRotation: [0, -Math.PI / 2, 0],
      robotPosition: [47, 2, -2],
      robotRotation: [0, -Math.PI / 3, 0],
      defaultGlb: '/glb/bubble_normal.glb',
      hoverdGlb: '/glb/bubble_hover.glb',
      hoverd: bubbleHovered6,
      setHover: setBubbleHover6,
      robotGlb:'/glb/robot/Alronald-orange.glb'
    },
  ];

  const TextPlaqueList = [
    {
      title: '员工社团',
      engTitle: 'Hobby Clubs',
      ref: titleRef1,
      fov:15,
      position: [-10, 9, 11],
      cameraPosition:[20,0,-9],
      tomatoPosition:[-1,0,0],
      tomatoRotation:[0,0,0],
      defaultGlb: '/glb/title/HobbyClubsDefault.glb',
      hoverdGlb: '/glb/title/HobbyClubsHoverd.glb',
      hoverd: titleHovered1,
      setHover: setTitleHover1
    },
    {
      title: '企业文化展示',
      engTitle: 'CULTURE SHOWCASE',
      ref: titleRef2,
      fov:11,
      position: [-17, 9, -10],
      cameraPosition:[25,0,10],
      tomatoPosition:[-12,0,-1],
      tomatoRotation:[0,-Math.PI/2,0],
      defaultGlb: '/glb/title/CultureShowcaseDefault.glb',
      hoverdGlb: '/glb/title/CultureShowcaseHoverd.glb',
      hoverd: titleHovered2,
      setHover: setTitleHover2
    },
    {
      title: '员工论坛',
      engTitle: 'Forum',
      ref: titleRef3,
      fov:5,
      position: [-42, 9, 3],
      cameraPosition:[30,0,2],
      tomatoPosition:[-34, 0, 4],
      tomatoRotation:[0,-Math.PI/2,0],
      defaultGlb: '/glb/title/ForumDefault.glb',
      hoverdGlb: '/glb/title/ForumHoverd.glb',
      hoverd: titleHovered3,
      setHover: setTitleHover3
    },
    {
      title: '麦麦二手市场',
      engTitle: 'Trading Market',
      ref: titleRef4,
      fov:10,
      position: [26, 9, 16],
      cameraPosition:[-15,0,-2.5],
      tomatoPosition:[10, 0, 3],
      tomatoRotation:[0,0,0],
      defaultGlb: '/glb/title/TradingMarketDefault.glb',
      hoverdGlb: '/glb/title/TradingMarketHoverd.glb',
      hoverd: titleHovered4,
      setHover: setTitleHover4
    },
    {
      title: '麦麦树洞',
      engTitle: 'Confession Booth',
      ref: titleRef5,
      fov:10,
      position: [25, 9, -10],
      cameraPosition:[-10,0,7],
      tomatoPosition:[15, 0, 0],
      tomatoRotation:[0,Math.PI/3,0],
      defaultGlb: '/glb/title/ConfessionBoothDefault.glb',
      hoverdGlb: '/glb/title/ConfessionBoothHoverd.glb',
      hoverd: titleHovered5,
      setHover: setTitleHover5
    },
    {
      title: '职业管理与提升',
      engTitle: 'CAREER ADVANCEMENT',
      ref: titleRef6,
      fov:6,
      position: [60, 9, -1],
      cameraPosition:[-15, 0, 5],
      tomatoPosition:[37, 0, 1],
      tomatoRotation:[0,Math.PI/3,0],
      defaultGlb: '/glb/title/CareerAdvancementDefault.glb',
      hoverdGlb: '/glb/title/CareerAdvancementHoverd.glb',
      hoverd: titleHovered6,
      setHover: setTitleHover6
    }
  ]


  const characterRef = useRef();
  const [previousPosition, setPreviousPosition] = useState({ x: 0, y: 0, z: 0 });

  const [textPlaqueList, setTextPlaqueList] = useState(TextPlaqueList);
  const [tomatoPosition,setTomatoPosition] = useState(null)
  const [tomatoRotation,setTomatoRotation] = useState(null)
  useFrame(({ camera }) => {
    // if (characterRef.current) {
    //   const { x, y, z } = characterRef.current.position;
    //   // 检查当前位置和之前的位置是否相同
    //   if (x !== previousPosition.x || y !== previousPosition.y || z !== previousPosition.z) {
    //     // 位置已更新，执行操作并更新前一帧位置
    //     console.log('对象的位置信息:', { x, y, z });
    //     setPreviousPosition({ x, y, z });
    //   }
    // }
    // 获取摄像头位置
    const cameraPosition = camera.position;
    if (!props.isZoomIn) {
      
      
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
    }else{
      bubbleRef1?.current?.lookAt(cameraPosition);
      bubbleRef2?.current?.lookAt(cameraPosition);
      bubbleRef3?.current?.lookAt(cameraPosition);
      bubbleRef4?.current?.lookAt(cameraPosition);
      bubbleRef5?.current?.lookAt(cameraPosition);
      bubbleRef6?.current?.lookAt(cameraPosition);
    }
  });

  const clickTitleRef = (event,item) => {
    event.stopPropagation();
    // console.log('item',item)
    props.SetZoomIn(true)
    props.setAutoRotate(false)
    setTomatoPosition(item.tomatoPosition)
    setTomatoRotation(item.tomatoRotation)
    // props.TogoCameraView(item.cameraPosition)
    

    // 让相机看向指定的点
    props.cameraRef.current.position.set(item.cameraPosition[0],item.cameraPosition[1],item.cameraPosition[2]);
    props.cameraFov.current = item.fov;
    // const position = new THREE.Vector3(item.tomatoPosition[0],item.tomatoPosition[1],item.tomatoPosition[2]);

    // props.cameraRef.current.lookAt(position)

    // console.log('cameraControll.current',props.cameraControll.current);
    // console.log('cameraRef.current',props.cameraRef.current);
  }

  const startChat = (item) => {
    console.log(item)
    props.setChatShow(true)
  }

  return (
    <>
      {/* <CameraControls minPolarAngle={1} maxPolarAngle={Math.PI / 1.6} /> */}
      {/* <directionalLight intensity={0.7} castShadow shadow-bias={-0.0004} position={[-12.8, 3.5, -4]}>
          <orthographicCamera attach="shadow-camera" args={[-12.8, 3.5, -4, -20, 0.1, 100]} />
      </directionalLight> */}
      {/* <ambientLight intensity={Math.PI / 2} /> */}
      <Physics  timeStep="vary">
        {props?.isZoomIn && <KeyboardControls map={keyboardMap}>
          <Controller  maxVelLimit={5}>
            <Gltf ref={characterRef} castShadow receiveShadow scale={0.2} rotation={tomatoRotation} position={tomatoPosition} src="/glb/tomato.glb" />
          </Controller>
        </KeyboardControls>}
        <RigidBody type="fixed" colliders="trimesh">
          <Gltf castShadow receiveShadow position={[0, 0, 5]} rotation={[0, 0, 0]} scale={1} src={"/glb/land.glb"} />
        </RigidBody>
      </Physics>
      <Gltf scale={1} rotation={[0, -Math.PI/3, 0]} position={[19, 1.2, -6]} src="/glb/shiba.glb" />
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
                  onClick={() => startChat(item)}
                  position={item.bubblePosition} rotation={item.bubbleRotation} scale={0.3} src={item.hoverd ? item.hoverdGlb : item.defaultGlb} />
                <Gltf
                  ref={item.robotRef}
                  position={item.robotPosition} rotation={item.robotRotation} scale={0.8} src={item.robotGlb} />
              </mesh>
            )
          }
        </mesh>}
      {/* 文字牌 */}
      {!props.isZoomIn && <mesh>
        {TextPlaqueList?.map((item, index) =>
          <Gltf
            key={index}
            ref={item.ref}
            onPointerOver={(event) => item.setHover(true)}
            onPointerOut={(event) => item.setHover(false)}
            onClick={(e) => clickTitleRef(e,item)}
            position={item.position}
            scale={item?.hoverd ? 2.5 : 2}
            src={item?.hoverd ? item?.hoverdGlb : item?.defaultGlb}
          />
        )}
      </mesh>}
    </>
  )
}
import '../styles/Overlay.css'

export default function Overlay(props) {
  console.log(props)
  const back2Map = () => {
    props.TogoCameraView([35,35,35]);
    props.setAutoRotate(true);
    props.SetZoomIn(false)
    props.cameraFov.current = 65
  }
  return (
    <div className="overlay-container">
      <div className="overlay-logo">META WORLD</div>
      {/* <div className="" style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>ZIMA BLUE TEAM</div> */}
      {props?.isZoomIn && <button className="overlay-navigate" onClick={back2Map}>
        <img src={"/navigator.png"}/>
        <p>NAVIGATE</p>
      </button>}
    </div>
  )
}
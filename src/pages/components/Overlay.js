import '../styles/Overlay.css'

export default function Overlay(props) {
  console.log(props)
  return (
    <div className="overlay-container">
      <div className="overlay-logo">META WORLD</div>
      {/* <div className="" style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>ZIMA BLUE TEAM</div> */}
      <button className="" style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px', zIndex: 999, background: 'yellow' }} onClick={props.TogoCameraView}>
        ZOOM IT
      </button>
    </div>
  )
}